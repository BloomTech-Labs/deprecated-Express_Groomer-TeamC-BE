exports.up = (knex) => {
    return knex.schema.table('groomers', function (table) {
        table.boolean('dogs').defaultTo(false);
        table.boolean('cats').defaultTo(false);
    });
  };


exports.down = (knex) => {
    return knex.schema.table('groomers', function (table) {
      table.dropColumn('dogs').defaultTo(false);
      table.dropColumn('cats').defaultTo(false);
    });
  };
  