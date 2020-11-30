const Router = require('express').Router();
const { Student } = require('../controllers/student');

const { AdditionalInformationRouter } = require('./additional_information_router');
Router.use('/adinfo', AdditionalInformationRouter);

Router.get('/', (req, res) => {
  Student.getAll(res);
});

Router.get('/:id', (req, res) => {
  const { id } = req.params;
  Student.get(id, res, { populate: { populate_by: 'Код_группы' } });
});

Router.post('/new', (req, res) => {
  const { data } = req.body;
  Student.save(data, res);
});

Router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { field } = req.body;
  Student.change(id, res, field);
});

Router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Student.delete(id, res, {});
});

exports.studentRouter = Router;
