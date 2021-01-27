exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('operational-model').insert([
        {model: 'mobile'},
        {model: 'stationary'}
      ]);
    });
};
