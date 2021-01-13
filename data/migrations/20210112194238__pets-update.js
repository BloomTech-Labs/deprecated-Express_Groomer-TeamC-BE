exports.up = (knex) => {
    return knex.schema.table('pets', function (table) {
      table.string('species').notNullable();
      table.string('breed');
      table.integer('age').notNullable();
      table.integer('weight').notNullable();
      table.string('vaccinations');
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.table('pets', (table) =>{
      table.dropColumn("species")
      table.dropColumn("breed")
      table.dropColumn("age")
      table.dropColumn("weight")
      table.dropColumn("vaccinations")
    });
  };
  