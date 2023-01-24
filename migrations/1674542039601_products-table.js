/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {

    pgm.createTable('products', {
        id: 'id',
        userId: {
            type: 'integer',
            notNull: true,
            references: '"users"',
            // onDelete: 'cascade',
        },
        title: { type: 'varchar(255)', notNull: true },
        body: { type: 'text', notNull: true },
        image: { type: 'varchar(255)', default: null},
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
    })
    pgm.createIndex('products', 'userId')
};

exports.down = pgm => {
    pgm.dropTable('products');
};
