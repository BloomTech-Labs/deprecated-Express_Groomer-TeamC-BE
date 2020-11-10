const faker = require('faker/locale/en_US');

// const customers = [...new Array(100)].map(() => ({
//   description: faker.lorem.paragraph(1),
//   photo_url: faker.image.avatar(),
//   name: faker.name.firstName(),
//   lastname: faker.name.lastName(),
//   address: faker.address.streetAddress(),
//   zip: faker.address.zipCode(),
//   phone: faker.phone.phoneNumber(),
//   email: faker.internet.email(),
//   city: faker.address.city(),
//   state: faker.address.state(),
//   country: 'USA',
// }));

const customers = [
  {
    photo_url: faker.image.avatar(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    description: faker.lorem.paragraph(1),
    address: '400-498 Chestnut Ave',
    latitude: '37.618784',
    longitude: '-122.418570',
    zip: '94066',
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    city: 'San Bruno',
    state: 'California',
    country: 'USA',
  },
];

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('customers')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert(customers);
    });
};
