exports.up = (knex) => {
  return knex.schema.createTable('appointments', function (table) {
    table.integer('customer_id').references('id').inTable('customers');
    table.integer('groomer_id').references('id').inTable('groomers');
    table.string('date', 128);
    table.string('time', 128);
    table.boolean('dog');
    table.boolean('cat');
  });
};

exports.down = (knex) => {
  return knex.schema.table('groomers', 'customers', function (table) {
    table.dropColumn('date');
    table.dropColumn('time');
    table.dropColumn('dog');
    table.dropColumn('cat');
  });
};
