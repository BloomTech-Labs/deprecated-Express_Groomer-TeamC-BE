exports.up = function(knex) {
  return knex.schema.createTable('groomers_operational_model', function (table) {
    table
        .integer('groomer_id')
        .notNull()
        .references('id')
        .inTable('groomers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    table
        .integer('operational_model_id')
        .notNull()
        .references('id')
        .inTable('operational_model')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('groomers_operational_model');
};
