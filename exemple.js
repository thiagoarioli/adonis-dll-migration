// const SchemaParser = require('./src/SchemaParser');
const NewSchemaParser = require('./src/NewSchemaParser');

const schema = {
  tables: [{
    id: '2h3q39',
    name: 'posts',
    softDelete: false,
    timeStamp: true,
  },
  {
    id: 'sq0v8',
    name: 'comments',
    softDelete: false,
    timeStamp: true,
  },
  {
    id: 'myv42i',
    name: 'users',
    softDelete: false,
    timeStamp: true,
  },
  ],
  columns: {
    '2h3q39': [{
      id: 'a10qir',
      name: 'id',
      type: 'integer',
      length: '',
      defValue: '',
      comment: '',
      autoInc: true,
      nullable: false,
      unique: true,
      index: true,
      unsigned: false,
      foreignKey: {
        references: {
          id: '',
          name: '',
        },
        on: {
          id: '',
          name: '',
        },
      },
    },
    {
      id: '85aef',
      name: 'title',
      type: 'string',
      length: '',
      defValue: '',
      comment: '',
      autoInc: false,
      nullable: true,
      unique: false,
      index: false,
      unsigned: false,
      foreignKey: {
        references: {
          id: '',
          name: '',
        },
        on: {
          id: '',
          name: '',
        },
      },
    },
    {
      id: '6fpfw9',
      name: 'slug',
      type: 'integer',
      length: '',
      defValue: '',
      comment: '',
      autoInc: false,
      nullable: false,
      unique: true,
      index: true,
      unsigned: false,
      foreignKey: {
        references: {
          id: '',
          name: '',
        },
        on: {
          id: '',
          name: '',
        },
      },
    },
    {
      id: 'ip3sf6',
      name: 'userid',
      type: 'integer',
      length: '',
      defValue: '',
      comment: '',
      autoInc: false,
      nullable: false,
      unique: false,
      index: false,
      unsigned: true,
      foreignKey: {
        references: {
          id: 'b0y62p',
          name: 'id',
        },
        on: {
          id: 'myv42i',
          name: 'users',
        },
      },
    },
    ],
    sq0v8: [{
      id: '0gc1h',
      name: 'id',
      type: 'integer',
      length: '',
      defValue: '',
      comment: '',
      autoInc: true,
      nullable: false,
      unique: true,
      index: true,
      unsigned: true,
      foreignKey: {
        references: {
          id: 'a10qir',
          name: 'id',
        },
        on: {
          id: '2h3q39',
          name: 'posts',
        },
      },
    },
    {
      id: 'ip197',
      name: 'message',
      type: 'text',
      length: '1000',
      defValue: '',
      comment: '',
      autoInc: false,
      nullable: false,
      unique: false,
      index: false,
      unsigned: false,
      foreignKey: {
        references: {
          id: '',
          name: '',
        },
        on: {
          id: '',
          name: '',
        },
      },
    },
    {
      id: 'oqje0f',
      name: 'userid',
      type: 'integer',
      length: '',
      defValue: '',
      comment: '',
      autoInc: false,
      nullable: false,
      unique: false,
      index: false,
      unsigned: true,
      foreignKey: {
        references: {
          id: 'b0y62p',
          name: 'id',
        },
        on: {
          id: 'myv42i',
          name: 'users',
        },
      },
    },
    ],
    myv42i: [{
      id: 'z8st7',
      name: 'name',
      type: 'text',
      length: '60',
      defValue: '',
      comment: '',
      autoInc: false,
      nullable: false,
      unique: false,
      index: false,
      unsigned: false,
      foreignKey: {
        references: {
          id: '',
          name: '',
        },
        on: {
          id: '',
          name: '',
        },
      },
    },
    {
      id: '79km0sf',
      name: 'email',
      type: 'integer',
      length: '100',
      defValue: '',
      comment: '',
      autoInc: false,
      nullable: false,
      unique: true,
      index: false,
      unsigned: false,
      foreignKey: {
        references: {
          id: '',
          name: '',
        },
        on: {
          id: '',
          name: '',
        },
      },
    },
    {
      id: 'b0y62p',
      name: 'id',
      type: 'integer',
      length: '',
      defValue: '',
      comment: '',
      autoInc: true,
      nullable: false,
      unique: true,
      index: true,
      unsigned: false,
      foreignKey: {
        references: {
          id: '',
          name: '',
        },
        on: {
          id: '',
          name: '',
        },
      },
    },
    ],
  },
  relations: [{
    source: {
      columnId: '0gc1h',
      tableId: 'sq0v8',
    },
    target: {
      columnId: 'a10qir',
      tableId: '2h3q39',
    },
  },
  {
    source: {
      columnId: 'ip3sf6',
      tableId: '2h3q39',
    },
    target: {
      columnId: 'b0y62p',
      tableId: 'myv42i',
    },
  },
  {
    source: {
      columnId: 'oqje0f',
      tableId: 'sq0v8',
    },
    target: {
      columnId: 'b0y62p',
      tableId: 'myv42i',
    },
  },
  ],
};

const newSchema = [
  {
    name: 'action_types',
    columns: [{
      name: 'pk_action_type',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'name',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 19,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 19,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_action_type',
      }],
    },
  },
  {
    name: 'actions',
    columns: [{
      name: 'pk_action',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'text',
      type: {
        datatype: 'text',
        length: 65535,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_action_type',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_debt',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_contact',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_deal',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'token',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_action',
      }],
    },
    foreignKeys: [{
      columns: [{
        column: 'fk_deal',
      }],
      reference: {
        table: 'deals',
        columns: [{
          column: 'pk_deal',
        }],
      },
      symbol: 'FKactions181312',
    },
    {
      columns: [{
        column: 'fk_action_type',
      }],
      reference: {
        table: 'action_types',
        on: [{
          trigger: 'update',
          action: 'no action',
        },
        {
          trigger: 'delete',
          action: 'cascade',
        },
        ],
        columns: [{
          column: 'pk_action_type',
        }],
      },
      symbol: 'fk_action_type_08_02',
    },
    {
      columns: [{
        column: 'fk_contact',
      }],
      reference: {
        table: 'contacts',
        on: [{
          trigger: 'update',
          action: 'no action',
        },
        {
          trigger: 'delete',
          action: 'cascade',
        },
        ],
        columns: [{
          column: 'pk_contact',
        }],
      },
      symbol: 'fk_contact_08_00',
    },
    {
      columns: [{
        column: 'fk_debt',
      }],
      reference: {
        table: 'debts',
        on: [{
          trigger: 'update',
          action: 'no action',
        },
        {
          trigger: 'delete',
          action: 'cascade',
        },
        ],
        columns: [{
          column: 'pk_debt',
        }],
      },
      symbol: 'fk_debt_08_01',
    },
    ],
    indexes: [{
      columns: [{
        column: 'fk_action_type',
      }],
      name: 'idx_fk_action_type_1_00',
    },
    {
      columns: [{
        column: 'fk_debt',
      }],
      name: 'idx_fk_debt_1_01',
    },
    {
      columns: [{
        column: 'fk_contact',
      }],
      name: 'idx_fk_contact_1_02',
    },
    ],
    options: {
      comment: 'Ever action generated by the system must be log here.',
    },
  },
  {
    name: 'charge_types',
    columns: [{
      name: 'pk_charge_type',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'name',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_charge_type',
      }],
    },
  },
  {
    name: 'charges',
    columns: [{
      name: 'pk_charge',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'token',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_installment',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_charge_type',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'status',
      type: {
        datatype: 'int',
        width: 11,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_charge',
      }],
    },
    foreignKeys: [{
      columns: [{
        column: 'fk_charge_type',
      }],
      reference: {
        table: 'charge_types',
        columns: [{
          column: 'pk_charge_type',
        }],
      },
      symbol: 'FKcharges855050',
    },
    {
      columns: [{
        column: 'fk_installment',
      }],
      reference: {
        table: 'installments',
        columns: [{
          column: 'pk_installment',
        }],
      },
      symbol: 'FKcharges667844',
    },
    ],
    indexes: [{
      columns: [{
        column: 'fk_installment',
      }],
      name: 'charges2',
    }],
  },
  {
    name: 'companies',
    columns: [{
      name: 'pk_company',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'name',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'document',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_company',
      }],
    },
    uniqueKeys: [{
      columns: [{
        column: 'document',
      }],
      name: 'idx_UNIQUE_document_32_05',
    }],
  },
  {
    name: 'contact_types',
    columns: [{
      name: 'pk_contact_type',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'name',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 19,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 19,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_contact_type',
      }],
    },
    options: {
      autoincrement: 5,
    },
  },
  {
    name: 'contacts',
    columns: [{
      name: 'pk_contact',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'value',
      type: {
        datatype: 'varchar',
        length: 500,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'fk_contact_type',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_client',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'fk_debtor',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_contact',
      }],
    },
    foreignKeys: [{
      columns: [{
        column: 'fk_client',
      }],
      reference: {
        table: 'companies',
        on: [{
          trigger: 'update',
          action: 'no action',
        },
        {
          trigger: 'delete',
          action: 'cascade',
        },
        ],
        columns: [{
          column: 'pk_company',
        }],
      },
      symbol: 'fk_client_38_06',
    },
    {
      columns: [{
        column: 'fk_contact_type',
      }],
      reference: {
        table: 'contact_types',
        on: [{
          trigger: 'update',
          action: 'no action',
        },
        {
          trigger: 'delete',
          action: 'cascade',
        },
        ],
        columns: [{
          column: 'pk_contact_type',
        }],
      },
      symbol: 'fk_contact_type_38_07',
    },
    {
      columns: [{
        column: 'fk_debtor',
      }],
      reference: {
        table: 'debtors',
        on: [{
          trigger: 'update',
          action: 'no action',
        },
        {
          trigger: 'delete',
          action: 'cascade',
        },
        ],
        columns: [{
          column: 'pk_debtor',
        }],
      },
      symbol: 'fk_debtor_38_05',
    },
    ],
    indexes: [{
      columns: [{
        column: 'fk_debtor',
      }],
      name: 'idx_fk_debtor_4_08',
    },
    {
      columns: [{
        column: 'fk_contact_type',
      }],
      name: 'idx_fk_contact_type_4_09',
    },
    {
      columns: [{
        column: 'fk_client',
      }],
      name: 'idx_fk_client_4_07',
    },
    ],
  },
  {
    name: 'deal_rules',
    columns: [{
      name: 'pk_deal_rule',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'fines_of_delay',
      type: {
        datatype: 'decimal',
        digits: 19,
        decimals: 2,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'interest',
      type: {
        datatype: 'decimal',
        digits: 19,
        decimals: 2,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'entry',
      type: {
        datatype: 'int',
        width: 11,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'max_installments',
      type: {
        datatype: 'int',
        width: 11,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'status',
      type: {
        datatype: 'int',
        width: 11,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_deal_rule',
      }],
    },
  },
  {
    name: 'deals',
    columns: [{
      name: 'pk_deal',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'fines_of_delay',
      type: {
        datatype: 'decimal',
        digits: 19,
        decimals: 2,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'interest',
      type: {
        datatype: 'decimal',
        digits: 19,
        decimals: 2,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'token',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'entry',
      type: {
        datatype: 'int',
        width: 11,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_debt',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_product_campain',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_deal',
      }],
    },
    foreignKeys: [{
      columns: [{
        column: 'fk_debt',
      }],
      reference: {
        table: 'debts',
        columns: [{
          column: 'pk_debt',
        }],
      },
      symbol: 'FKdeals526540',
    },
    {
      columns: [{
        column: 'fk_product_campain',
      }],
      reference: {
        table: 'product_campains',
        columns: [{
          column: 'pk_product_campain',
        }],
      },
      symbol: 'FKdeals834787',
    },
    ],
  },
  {
    name: 'debt_histories',
    columns: [{
      name: 'pk_debt_histories',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'fk_debt',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_payment',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'value',
      type: {
        datatype: 'decimal',
        digits: 19,
        decimals: 2,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_debt_histories',
      }],
    },
    foreignKeys: [{
      columns: [{
        column: 'fk_payment',
      }],
      reference: {
        table: 'payments',
        columns: [{
          column: 'pk_payment',
        }],
      },
      symbol: 'FKdebt_histo51016',
    },
    {
      columns: [{
        column: 'fk_debt',
      }],
      reference: {
        table: 'debts',
        columns: [{
          column: 'pk_debt',
        }],
      },
      symbol: 'FKdebt_histo320212',
    },
    ],
  },
  {
    name: 'debtors',
    columns: [{
      name: 'pk_debtor',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'name',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'document',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'auth_key',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_debtor',
      }],
    },
    uniqueKeys: [{
      columns: [{
        column: 'document',
      }],
      name: 'idx_UNIQUE_document_7_13',
    }],
  },
  {
    name: 'debts',
    columns: [{
      name: 'pk_debt',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'fk_debtor',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_client',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_product',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'start',
      type: {
        datatype: 'timestamp',
        fractional: 19,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'value',
      type: {
        datatype: 'decimal',
        digits: 19,
        decimals: 2,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'debt_value',
      type: {
        datatype: 'decimal',
        digits: 19,
        decimals: 2,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'description',
      type: {
        datatype: 'text',
        length: 65535,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'title_number',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'short_link',
      type: {
        datatype: 'int',
        width: 11,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'auth_key',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_debt',
      }],
    },
    foreignKeys: [{
      columns: [{
        column: 'fk_product',
      }],
      reference: {
        table: 'products',
        columns: [{
          column: 'pk_product',
        }],
      },
      symbol: 'FKdebts184710',
    },
    {
      columns: [{
        column: 'fk_client',
      }],
      reference: {
        table: 'companies',
        on: [{
          trigger: 'update',
          action: 'no action',
        },
        {
          trigger: 'delete',
          action: 'cascade',
        },
        ],
        columns: [{
          column: 'pk_company',
        }],
      },
      symbol: 'fk_client_53_010',
    },
    {
      columns: [{
        column: 'fk_debtor',
      }],
      reference: {
        table: 'debtors',
        on: [{
          trigger: 'update',
          action: 'no action',
        },
        {
          trigger: 'delete',
          action: 'cascade',
        },
        ],
        columns: [{
          column: 'pk_debtor',
        }],
      },
      symbol: 'fk_debtor_53_09',
    },
    ],
    indexes: [{
      columns: [{
        column: 'fk_client',
      }],
      name: 'idx_fk_client_55_11',
    },
    {
      columns: [{
        column: 'fk_debtor',
      }],
      name: 'idx_fk_debtor_55_10',
    },
    ],
  },
  {
    name: 'evidences',
    columns: [{
      name: 'pk_evidence',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'path',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_debt',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_evidence',
      }],
    },
    foreignKeys: [{
      columns: [{
        column: 'fk_debt',
      }],
      reference: {
        table: 'debts',
        on: [{
          trigger: 'update',
          action: 'no action',
        },
        {
          trigger: 'delete',
          action: 'cascade',
        },
        ],
        columns: [{
          column: 'pk_debt',
        }],
      },
      symbol: 'fk_debt_75_011',
    }],
    indexes: [{
      columns: [{
        column: 'fk_debt',
      }],
      name: 'idx_fk_debt_78_14',
    }],
  },
  {
    name: 'installments',
    columns: [{
      name: 'pk_installment',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'value',
      type: {
        datatype: 'decimal',
        digits: 19,
        decimals: 2,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'maturity',
      type: {
        datatype: 'timestamp',
        fractional: 19,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'number',
      type: {
        datatype: 'int',
        width: 5,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_debt',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'fk_deal',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_installment',
      }],
    },
    foreignKeys: [{
      columns: [{
        column: 'fk_deal',
      }],
      reference: {
        table: 'deals',
        columns: [{
          column: 'pk_deal',
        }],
      },
      symbol: 'FKinstallmen867487',
    },
    {
      columns: [{
        column: 'fk_debt',
      }],
      reference: {
        table: 'debts',
        on: [{
          trigger: 'update',
          action: 'no action',
        },
        {
          trigger: 'delete',
          action: 'cascade',
        },
        ],
        columns: [{
          column: 'pk_debt',
        }],
      },
      symbol: 'fk_debt_85_012',
    },
    ],
    indexes: [{
      columns: [{
        column: 'fk_deal',
      }],
    },
    {
      columns: [{
        column: 'fk_debt',
      }],
      name: 'idx_fk_debt_87_15',
    },
    ],
  },
  {
    name: 'interactions',
    columns: [{
      name: 'pk_interaction',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'description',
      type: {
        datatype: 'text',
        length: 65535,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_interaction_type',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_debt',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_action',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'fk_deal',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'content',
      type: {
        datatype: 'text',
        length: 65535,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_interaction',
      }],
    },
    foreignKeys: [{
      columns: [{
        column: 'fk_deal',
      }],
      reference: {
        table: 'deals',
        columns: [{
          column: 'pk_deal',
        }],
      },
      symbol: 'FKinteractio687387',
    },
    {
      columns: [{
        column: 'fk_action',
      }],
      reference: {
        table: 'actions',
        on: [{
          trigger: 'update',
          action: 'no action',
        },
        {
          trigger: 'delete',
          action: 'cascade',
        },
        ],
        columns: [{
          column: 'pk_action',
        }],
      },
      symbol: 'fk_action_93_013',
    },
    {
      columns: [{
        column: 'fk_debt',
      }],
      reference: {
        table: 'debts',
        on: [{
          trigger: 'update',
          action: 'no action',
        },
        {
          trigger: 'delete',
          action: 'cascade',
        },
        ],
        columns: [{
          column: 'pk_debt',
        }],
      },
      symbol: 'fk_debt_93_015',
    },
    {
      columns: [{
        column: 'fk_interaction_type',
      }],
      reference: {
        table: 'interactions_types',
        on: [{
          trigger: 'update',
          action: 'no action',
        },
        {
          trigger: 'delete',
          action: 'cascade',
        },
        ],
        columns: [{
          column: 'pk_interaction_type',
        }],
      },
      symbol: 'fk_interaction_type_93_014',
    },
    ],
    indexes: [{
      columns: [{
        column: 'fk_debt',
      }],
      name: 'idx_fk_debt_95_17',
    },
    {
      columns: [{
        column: 'fk_action',
      }],
      name: 'idx_fk_action_95_18',
    },
    {
      columns: [{
        column: 'fk_interaction_type',
      }],
      name: 'idx_fk_interaction_type_95_16',
    },
    ],
    options: {
      comment: 'Every interaction made by the debtor with the debt must be logged here',
    },
  },
  {
    name: 'interactions_types',
    columns: [{
      name: 'pk_interaction_type',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'name',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_interaction_type',
      }],
    },
    options: {
      autoincrement: 8,
    },
  },
  {
    name: 'keys',
    columns: [{
      name: 'pk_key',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'name',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'value',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 19,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 19,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'deleted_at',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_key',
      }],
    },
    options: {
      autoincrement: 6,
    },
  },
  {
    name: 'payments',
    columns: [{
      name: 'pk_payment',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'token',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_charge',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'status',
      type: {
        datatype: 'int',
        width: 11,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_payment',
      }],
    },
    foreignKeys: [{
      columns: [{
        column: 'fk_charge',
      }],
      reference: {
        table: 'charges',
        columns: [{
          column: 'pk_charge',
        }],
      },
      symbol: 'FKpayments487002',
    }],
  },
  {
    name: 'product_campains',
    columns: [{
      name: 'pk_product_campain',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'fk_product',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fines_of_delay',
      type: {
        datatype: 'decimal',
        digits: 19,
        decimals: 2,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'interest',
      type: {
        datatype: 'decimal',
        digits: 19,
        decimals: 2,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'discount_percent',
      type: {
        datatype: 'int',
        width: 11,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'discount_value',
      type: {
        datatype: 'decimal',
        digits: 19,
        decimals: 2,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'days_of_delay',
      type: {
        datatype: 'int',
        width: 11,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'over_main',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'status',
      type: {
        datatype: 'int',
        width: 11,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'start',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'end',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'name',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_deal_rule',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'fk_charge_type',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_product_campain',
      }],
    },
    foreignKeys: [{
      columns: [{
        column: 'fk_product',
      }],
      reference: {
        table: 'products',
        columns: [{
          column: 'pk_product',
        }],
      },
      symbol: 'FKproduct_ca445081',
    },
    {
      columns: [{
        column: 'fk_deal_rule',
      }],
      reference: {
        table: 'deal_rules',
        columns: [{
          column: 'pk_deal_rule',
        }],
      },
      symbol: 'FKproduct_ca714097',
    },
    {
      columns: [{
        column: 'fk_charge_type',
      }],
      reference: {
        table: 'charge_types',
        columns: [{
          column: 'pk_charge_type',
        }],
      },
      symbol: 'FKproduct_ca170130',
    },
    ],
  },
  {
    name: 'products',
    columns: [{
      name: 'pk_product',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'name',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fk_company',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'fines_of_delaty',
      type: {
        datatype: 'decimal',
        digits: 19,
        decimals: 2,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'interest',
      type: {
        datatype: 'decimal',
        digits: 19,
        decimals: 2,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'days_of_delay',
      type: {
        datatype: 'int',
        width: 11,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_product',
      }],
    },
    foreignKeys: [{
      columns: [{
        column: 'fk_company',
      }],
      reference: {
        table: 'companies',
        columns: [{
          column: 'pk_company',
        }],
      },
      symbol: 'FKproducts440932',
    }],
  },
  {
    name: 'users',
    columns: [{
      name: 'pk_user',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
        autoincrement: true,
      },
    },
    {
      name: 'name',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'email',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'password',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'password_reset_token',
      type: {
        datatype: 'varchar',
        length: 255,
      },
      options: {
        nullable: true,
      },
    },
    {
      name: 'fk_company',
      type: {
        datatype: 'int',
        width: 10,
      },
      options: {
        nullable: false,
      },
    },
    {
      name: 'deleted',
      type: {
        datatype: 'int',
        width: 3,
      },
      options: {
        nullable: false,
        default: 0,
      },
    },
    {
      name: 'created_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
    },
    {
      name: 'updated_at',
      type: {
        datatype: 'timestamp',
        fractional: 0,
      },
      options: {
        nullable: true,
      },
    },
    ],
    primaryKey: {
      columns: [{
        column: 'pk_user',
      }],
    },
    foreignKeys: [{
      columns: [{
        column: 'fk_company',
      }],
      reference: {
        table: 'companies',
        columns: [{
          column: 'pk_company',
        }],
      },
      symbol: 'FKusers781987',
    }],
    uniqueKeys: [{
      columns: [{
        column: 'email',
      }],
      name: 'users',
    }],
  },
];


const migrations = new NewSchemaParser(schema).convert();
console.log(JSON.stringify(migrations, null, 2));
