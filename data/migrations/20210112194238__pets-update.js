exports.up = (knex) => {
    return knex.schema.table('pets', function (table) {
      table.integer('customer_id')
        .unsigned()
        .references('id')
        .inTable('customers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
<<<<<<< HEAD
      table.string('species');
      table.string('breed');
      table.integer('age');
      table.integer('weight');
=======
      table.string('species')
      table.string('breed');
      table.integer('age')
      table.integer('weight')
>>>>>>> 3780a1d5ebf54d5092125e0db4fd932a2974dfc2
      table.string('vaccinations');
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.table('pets', (table) =>{
      table.dropColumn("vaccinations")
      table.dropColumn("weight")
      table.dropColumn("age")
      table.dropColumn("breed")
      table.dropColumn("species")
      table.dropColumn("customer_id")
    });
  };
  