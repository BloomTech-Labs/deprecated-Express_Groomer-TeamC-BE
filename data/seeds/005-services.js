exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('services')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('services').insert([
        {
          name: 'walk',
          id: 1
        },
        {
          name: 'daycare',
          id: 2
        },
        {
          name: 'vetVisit',
          id: 3
        },
      ]);
    });
};
