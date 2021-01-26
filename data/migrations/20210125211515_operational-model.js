exports.up = function(knex) {
  return knex.schema.createTable('operational_model', function (table) {
      table.increments('id');
      table.string('model');
      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('operational_model')
};
