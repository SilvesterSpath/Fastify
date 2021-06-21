const items = require('../items.js');

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

module.exports = {
  getItems,
  getItem,
};
