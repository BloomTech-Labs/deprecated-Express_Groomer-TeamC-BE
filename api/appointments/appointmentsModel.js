const db = require('../../data/db-config');

const findAll = async () => {
    return await db('appointments');
  };

const findById = async (id) => {
  return db('appointments').where({ id }).first().select('*');
};

const create = async (time) => {
  return db('appointments').insert(time).returning('*');
};

const remove = async (id) => {
  return await db('appointments').where({ id }).del();
};

module.exports = {
    findAll,
  findById,
  create,
  remove,
};
