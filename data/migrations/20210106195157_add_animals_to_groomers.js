exports.up = (knex) => {
    return knex.schema.table('groomers', function (table) {
        table.boolean('dogs')
        table.boolean('cats')
    });
  };



exports.down = (knex) => {
    return knex.schema.table('groomers', function (table) {
      table.dropColumn('dogs');
      table.dropColumn('cats');
    });
  };
  