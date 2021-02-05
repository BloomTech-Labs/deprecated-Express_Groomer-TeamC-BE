exports.up = (knex) => {
  return knex.schema.createTable('appointments', function (table) {
    table.increment('booking_id').primary()
    table.integer('customer_id').references('id').inTable('customers').notNullable();
    table.integer('groomer_id').references('id').inTable('groomers').notNullable();
    table.string('date', 128).notNullable();
    table.string('time', 128).notNullable();
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
