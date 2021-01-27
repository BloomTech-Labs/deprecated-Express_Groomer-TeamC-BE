exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('groomers_operational_model').del()
    .then(function () {
      // Inserts seed entries
      return knex('groomers_operational_model').insert([
        {groomer_id: 1, operational_model_id: 1},
        {groomer_id: 1, operational_model_id: 2},
        {groomer_id: 2, operational_model_id: 1},
        {groomer_id: 3, operational_model_id: 2},
      ]);
    });
};
