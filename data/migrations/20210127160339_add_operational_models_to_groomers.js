exports.up = function(knex) {
  return knex.schema.table('groomers', function (table) {
      table.boolean('isMobile').defaultTo(false);
      table.boolean('isStationary').defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.table('groomers', function (table) {
      table.dropColumn('isMobile')
      table.dropColumn('isStationary')
  });
};
