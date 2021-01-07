exports.up = (knex) => {
    return knex.schema.createTable('groomers', function (table) {

      table.boolean('dogs')
      table.boolean('cats')
      
    });
  };


exports.down = (knex) => {
  return knex.schema.dropTableIfExists('groomers');
};
