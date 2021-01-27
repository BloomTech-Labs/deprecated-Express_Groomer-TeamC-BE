exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('operational_model').del()
    .then(function () {
      // Inserts seed entries
      return knex('operational_model').insert([
        {model: 'mobile'},
        {model: 'stationary'}
      ]);
    });
};
