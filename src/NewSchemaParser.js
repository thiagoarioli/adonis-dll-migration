const _ = require('lodash');
const pluralize = require('pluralize');
const Utils = require('./Utils');
const MigrationFormatter = require('./MigrationFormatter');
const FactoryFormatter = require('./FactoryFormatter');
const ModelFormatter = require('./ModelFormatter');

/**
 * Parse JSON schema
 */
class NewSchemaParser {
  /**
   * @param  {Object} schema Parsed JSON schema
   */
  constructor(schema) {
    this.schema = schema;
    this.tableIds = {};
    this.columnIds = {};
  }

  /**
   * get table name from an id
   * @param  {number} id
   * @return {string}
   */
  getTableName(id) {
    return this.tableIds[id];
  }

  /**
   * get table id from name
   * @param  {String} name
   * @return {String}
   */
  getTableId(name) {
    let matchId;

    Object.keys(this.tableIds).map((id) => {
      if (this.tableIds[id] === name) {
        matchId = id;
      }
    });

    return matchId;
  }

  /**
   * get a column's table from id
   * @param  {String} id
   * @return {String}
   */
  getColumnTable(id) {
    return this.columnIds[id].table;
  }

  /**
   * get a column's name from id
   * @param  {String} id
   * @return {String}
   */
  getColumnName(id) {
    return this.columnIds[id].column;
  }

  /**
   * get a column id from the column and table name
   * @param  {String} columnName
   * @param  {String} tableName
   * @return {String}
   */
  getColumnId(columnName, tableName) {
    let matchId;

    Utils.objectToArray(this.columnIds, 'id').map((column) => {
      if (column.name === columnName && column.table === tableName) {
        matchId = column.id;
      }
    });

    return matchId;
  }

  /**
   * Convert the Schema JSON into a format ready for the file writer
   * @return {Object}
   */
  convert() {
    const tables = this.formatTables(this.schema.tables, this.schema.columns);

    this.decorateRelations(tables, this.schema.relations);

    const migrations = new MigrationFormatter().format(tables);
    const factories = FactoryFormatter.format(tables);
    const models = new ModelFormatter().format(tables);
    const seeds = NewSchemaParser.generateSeeds();
    const tests = NewSchemaParser.generateTests();

    return {
      tables,
      migrations,
      factories,
      models,
      seeds,
      tests,
    };
  }

  /**
   * Format the tables object ready for use in writers
   * @param  {Object} rawTables  tables object from raw json schema
   * @param  {Object} rawColumns  columns object from raw json schema
   * @return {Object}
   */
  formatTables(rawTables, rawColumns) {
    const tables = this.setupTables(rawTables);
    this.mergeColumns(rawColumns, tables);

    return tables;
  }

  /**
   * Add basic data to each table
   * @param  {Object} rawTables  tables object from raw json schema
   * @return {Object}
   */
  setupTables(rawTables) {
    const tables = {};
    rawTables.forEach((table) => {
      tables[table.name] = {
        softDelete: table.softDelete || false,
        timestamp: table.timeStamp || false,
        isLink: table.name.includes('_'),
        modelName: pluralize.singular(_.upperFirst(_.camelCase(table.name))),
        relations: {},
      };
      this.tableIds[table.id] = table.name;
    });

    return tables;
  }

  /**
   * Add corresponding columns to the tables object
   * @param  {Object} rawColumns  columns object from raw json schema
   * @param  {Object} tables      partially formatted tables object
   */
  mergeColumns(rawColumns, tables) {
    Object.keys(tables).map((tableName) => {
      const table = tables[tableName];
      const columnsObject = {};

      rawColumns[this.getTableId(tableName)].forEach((column) => {
        this.columnIds[column.id] = { table: tableName, column: column.name };
        columnsObject[column.name] = NewSchemaParser.formatColumn(column);
      });

      table.columns = columnsObject;
    });
  }

  /**
   * Prepare column for tables object
   * @param  {Object} column column object from raw json schema
   * @return {Object}        [description]
   */
  static formatColumn(column) {
    let newColumn = column;
    if (!(newColumn.foreignKey && newColumn.foreignKey.references
      && newColumn.foreignKey.references.id)) {
      newColumn.foreignKey = null;
    }

    newColumn = NewSchemaParser.convertType(newColumn);

    return newColumn;
  }

  /**
   * Convert schema builder types into corresponding knex types
   * @param  {Object} column column object from raw json schema
   */
  static convertType(column) {
    const newColumn = column;
    if (['tinyInteger', 'smallInteger', 'mediumInteger'].includes(newColumn.type)) {
      newColumn.type = 'integer';
    }

    if (newColumn.length && ['text', 'char'].includes(newColumn.type)) {
      newColumn.type = 'string';
    }

    if (newColumn.type === 'double') {
      newColumn.type = 'float';
    }

    if (newColumn.type === 'char') {
      newColumn.type = 'text';
    }

    if (newColumn.autoInc) {
      newColumn.type = 'increments';
    }

    return newColumn;
  }

  /**
   * Add relations to tables
   * @param  {Object} tables    Tables object
   * @param  {Array} relations  relations array from raw json schema
   */
  decorateRelations(tables, relations) {
    relations.map((relation) => {
      this.getRelationData(tables, relation);

      if (!relation.sourceTable.isLink) {
        NewSchemaParser.setBelongsTo(relation);

        NewSchemaParser.setHas(relation);
      } else {
        const relatedRelations = relations.filter(related =>
          related.source.tableId === relation.source.tableId
           && related.source.columnId !== relation.source.columnId);

        relatedRelations.map((related) => {
          this.setBelongsToMany(tables, relation, related);
        });
      }
    });

    NewSchemaParser.findHasManyThrough(tables);
  }

  /**
   * Collate data about a relationship and the tables involved
   * @param  {Object} tables    Tables object
   * @param  {Object} relation  relation object from raw json schema
   */
  getRelationData(tables, relation) {
    const newRelation = relation;
    newRelation.sourceTableName = this.getTableName(relation.source.tableId);
    newRelation.sourceTable = tables[relation.sourceTableName];
    newRelation.sourceColumnName = this.getColumnName(relation.source.columnId);
    newRelation.sourceColumn = tables[relation.sourceTableName].columns[relation.sourceColumnName];

    newRelation.targetTableName = this.getTableName(relation.target.tableId);
    newRelation.targetTable = tables[relation.targetTableName];
    newRelation.targetColumnName = this.getColumnName(relation.target.columnId);
    newRelation.targetColumn = tables[relation.targetTableName].columns[relation.targetColumnName];
    return newRelation;
  }

  /**
   * Add a belongsTo relationship to a table
   * @param {Object} relation formatted relation object
   */
  static setBelongsTo(relation) {
    const newRelation = relation;
    let relationName = pluralize.singular(_.lowerCase(relation.targetTableName));
    if (relation.targetTableName === relation.sourceTableName) {
      relationName = `parent${relation.targetTable.modelName}`;
    }

    newRelation.sourceTable.relations[relationName] = {
      type: 'belongsTo',
      table: relation.targetTableName,
      relatedModel: relation.targetTable.modelName,
      primaryKey: relation.targetColumnName,
      foreignKey: relation.sourceColumnName,
    };

    return newRelation;
  }

  /**
   * Add a hasOne or hasMany relationship to a table
   * @param {Object} relation formatted relation object
   */
  static setHas(relation) {
    const newRelation = relation;
    let targetRelationName = _.lowerCase(relation.sourceTableName);
    targetRelationName = relation.sourceColumn.unique ?
      pluralize.singular(targetRelationName) :
      pluralize.plural(targetRelationName);

    newRelation.targetTable.relations[targetRelationName] = {
      type: relation.sourceColumn.unique ? 'hasOne' : 'hasMany',
      table: relation.sourceTableName,
      relatedModel: relation.sourceTable.modelName,
      primaryKey: relation.targetColumnName,
      foreignKey: relation.sourceColumnName,
    };

    return newRelation;
  }

  /**
   * Add a belongsToMany relationship to a table
   * @param  {Object} tables    Tables object
   * @param {Object} relation   formatted relation object
   * @param {Object} related    formatted relation object for corresponding relation
   */
  setBelongsToMany(tables, relation, related) {
    const newRelation = relation;
    const relatedName = this.getTableName(related.target.tableId);
    const relatedTable = tables[relatedName];
    const relatedColumnName = this.getColumnName(related.target.columnId);
    const relatedForeignColumnName = this.getColumnName(related.source.columnId);

    newRelation.targetTable.relations[pluralize.plural(_.lowerCase(relatedName))] = {
      type: 'belongsToMany',
      table: relatedName,
      relatedModel: relatedTable.modelName,
      primaryKey: relation.targetColumnName,
      foreignKey: relation.sourceColumnName,
      relatedPrimaryKey: relatedColumnName,
      relatedForeignKey: relatedForeignColumnName,
      pivotTable: relation.sourceTableName,
      withTimestamps: relation.sourceTable.timestamp,
    };

    return newRelation;
  }

  /**
   * Traverse through relations to find chainable hasManyThrough relations
   * @param {Object} tables formatted tables object
   */
  static findHasManyThrough(tables) {
    const chainable = ['belongsToMany', 'hasManyThrough', 'hasMany', 'hasOne'];

    // Traverse through to find chainable relations
    for (let i = 0; i < 1; i) {
      i = 1;
      Object.keys(tables).map((tableName) => {
        const table = tables[tableName];

        Object.keys(table.relations).map((relationName) => {
          const relation = table.relations[relationName];
          const relatedTable = tables[relation.table];

          Utils.objectToArray(relatedTable.relations, 'name').map((nextRelation) => {
            if (chainable.includes(relation.type) &&
              chainable.includes(nextRelation.type) &&
              !table.relations[nextRelation.name] &&
              nextRelation.table !== tableName) {
              // If both relationships are chainable, and not already chained, set up hasManyThrough

              table.relations[nextRelation.name] = {
                type: 'hasManyThrough',
                table: nextRelation.table,
                relatedModel: relatedTable.modelName,
                relatedMethod: nextRelation.name,
                primaryKey: relation.primaryKey,
                foreignKey: relation.foreignKey,
              };

              // Keep the loop going again
              i = 0;
            }
          });
        });
      });
    }
  }

  /**
   * Generate Seed files
   * @return {Array}
   */
  static generateSeeds() {
    const seeds = [];
    return seeds;
  }

  /**
   * Generate Test files
   * @return {Array}
   */
  static generateTests() {
    const tests = [];
    return tests;
  }
}

module.exports = NewSchemaParser;
