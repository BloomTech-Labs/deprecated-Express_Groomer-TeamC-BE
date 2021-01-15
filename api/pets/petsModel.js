const db = require('../../data/db-config');

const findAll = async (id) => {
  return await db('pets').select('*').where({
    customer_id: id
  });
};

const findById = async (id) => {
  return db('pets').where({ id }).first().select('*');
};

const create = async (profile) => {
  return db('pets').insert(profile).returning('*');
};

const update = (id, profile) => {
  return db('pets')
    .where({ id: id })
    .first()
    .update(profile)
    .returning('*');
};

const remove = async (id) => {
  return await db('pets').where({ id }).del();
};

module.exports = {
  findAll,
  findBy,
  findById,
  create,
  update,
  remove,
};
