const Router = require('express').Router();
const { Group } = require('../controllers/group');

Router.get('/', (req, res) => {
  Group.getAll(res);
});

Router.get('/:id', (req, res) => {
  const { id } = req.params;
  Group.get(id, res, {});
});

Router.post('/new', (req, res) => {
  const { data } = req.body;
  Group.save(data, res);
});

Router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { field } = req.body;

  Group.change(id, res, field);
});

Router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Group.delete(id, res, {});
});

exports.groupRouter = Router;
