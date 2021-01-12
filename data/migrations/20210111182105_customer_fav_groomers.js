exports.up = (knex) => {
  return knex.schema.table('customers', function(table){
    table.specificType('favorite_groomers', 'int ARRAY');
  });
};

exports.down = (knex) => {
  return knex.schema.table('customers', function(table){
      table.dropColumn('favorite_groomers');
  });
};
