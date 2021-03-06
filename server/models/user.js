const db = require("../databases/connection");
const tableName = "users";

const create = (user) => db(tableName).insert(user);
const del = (id) => db(tableName).where({ id }).del();
const findAll = () => db(tableName);
const find = (filters) => db(tableName).where(filters);
const findOne = (filters) => db(tableName).where(filters).first();

const update = (id, users) => {
  delete users.id;
  return db(tableName).where({ id }).update(users);
};

module.exports = {
  create,
  del,
  find,
  findAll,
  findOne,
  update,
};
