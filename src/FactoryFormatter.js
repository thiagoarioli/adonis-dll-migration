const Utils = require('./Utils');

class FactoryFormatter {
  /**
   * Format factories array before sending to writer
   * @param  {Object} tables Tables schema
   * @return {Array}
   */
  static format(tables) {
    let factories = Utils.objectToArray(tables, 'name');

    factories = factories.filter(factory => !factory.isLink);

    factories = factories.map((factory) => {
      const newFactory = factory;
      newFactory.columnsArray = Utils.objectToArray(factory.columns, 'name');

      newFactory.columnsArray = newFactory.columnsArray.map((column) => {
        const newColumn = column;
        newColumn.fieldRule = FactoryFormatter.generateFieldRule(column);
        return newColumn;
      });

      newFactory.columnsArray = Utils.removeLastComma(newFactory.columnsArray, 'fieldRule');

      return newFactory;
    });

    return factories;
  }

  /**
   * Generate the field rule value for a column
   * to be printed in the factory
   * @param  {Object} column Column schema
   * @return {String}
   */
  static generateFieldRule(column) {
    if (column.type === 'increments' || column.foreignKey) {
      return null;
    }

    let string = `${column.name}: faker.`;

    string += FactoryFormatter.fakerType(column);
    string += FactoryFormatter.stringLength(column);

    string += ',';

    return string;
  }

  /**
   * Start off the field rule string with the faker type call
   * @param  {Object} column Column schema
   * @return {String}
   */
  static fakerType(column) {
    let string = '';

    if (column.nullable) {
      string += 'bool() ? null : faker.';
    }

    if (['timestamp'].includes(column.type)) {
      string += `${column.type}()`;
    }

    if (['text', 'string'].includes(column.type) || (column.type && column.type.includes('Text'))) {
      string += 'sentence()';
    }

    if (['integer', 'bigInteger'].includes(column.type)) {
      if (column.unsigned) {
        string += 'natural()';
      } else {
        string += 'integer()';
      }
    }

    if (['decimal', 'float'].includes(column.type)) {
      string += 'floating({min: 0})';
    }

    if (['date', 'dateTime'].includes(column.type)) {
      string += 'date({string: true, american: false})';
    }

    if (column.type === 'dateTime') {
      string += ' + " " + faker.';
    }

    if (column.type === 'boolean') {
      string += 'bool()';
    }

    if (['time', 'dateTime'].includes(column.type)) {
      string += 'hour({twentyfour: true}) + "/" + faker.minute() + "/" + faker.second()';
    }

    return string;
  }

  /**
   * Cut the generated string if there is a length field
   * @param  {Object} column Column schema
   * @return {String}
   */
  static stringLength(column) {
    let string = '';

    if (column.length && ['text', 'string'].includes(column.type)) {
      string += `.substring(0, ${column.length})`;
    }

    return string;
  }
}

module.exports = FactoryFormatter;
