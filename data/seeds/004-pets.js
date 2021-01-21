const faker = require('faker');

const pets = [...new Array(3)].map(() => ({
  customer_id: 1,
  name: faker.name.firstName(),
  species: faker.name.lastName(),
  age: faker.random.number(),
  weight: faker.random.number(),
  description: faker.lorem.paragraph(1),
  photo_url: faker.image.avatar(),
}));

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pets')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert(pets);
    });
};
