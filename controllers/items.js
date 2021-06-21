let items = require('../Items');
const { v4: uuidv4 } = require('uuid');

const getItems = (req, reply) => {
  reply.send(items);
};

const getItem = (req, reply) => {
  const id = req.params.id;
  const item = items.find((i) => {
    return i.id === id;
  });

  reply.send(item);
};

const addItem = (req, reply) => {
  const name = req.body.name;
  const item = {
    id: uuidv4(),
    name,
  };

  items = [...items, item];
  reply.code(201).send(item);
};

module.exports = {
  getItems,
  getItem,
  addItem,
};
