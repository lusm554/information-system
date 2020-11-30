const Router = require('express').Router();
const { Teacher } = require('../controllers/teacher');

Router.get('/', (req, res) => {
  Teacher.getAll(res);
});

Router.get('/:id', (req, res) => {
  const { id } = req.params;
  Teacher.get(id, res, {});
});

Router.post('/new', (req, res) => {
  const { data } = req.body;
  Teacher.save(data, res);
});

Router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { field } = req.body;

  Teacher.change(id, res, field);
});

Router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Teacher.delete(id, res, {});
});

exports.teacherRouter = Router;
