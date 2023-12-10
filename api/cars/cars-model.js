//const knex = require('knex');
const db = require('../../data/db-config.js');
// const db = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './data/dealer.db3'
//   },
//   useNullAsDefault: true
// });

const getAll = async () => {
  // DO YOUR MAGIC
  const result = await db('cars').orderBy('id');
  return result;
}

const getById = async (id) => {
  // DO YOUR MAGIC
  const result = await db('cars')
    .where('id',id)
    .first();
  return result;
}

const create = async (car) => {
  // DO YOUR MAGIC
  const [id] = await db('cars').insert(car);
  return getById(id);
};

module.exports = {
  getAll,
  getById,
  create
}
