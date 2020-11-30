const Router = require('express').Router();
const { AdditionalInformation } = require('../controllers/additional_information');

Router.get('/', (req, res) => {
  AdditionalInformation.getAll(res);
});

Router.get('/:id', (req, res) => {
  const { id } = req.params;
  AdditionalInformation.get(id, res, { populate: { populate_by: 'Код_студента' } });
});

Router.post('/new', (req, res) => {
  const { data } = req.body;
  AdditionalInformation.save(data, res);
});

Router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { field } = req.body;
  AdditionalInformation.change(id, res, field);
});

Router.delete('/:id', (req, res) => {
  const { id } = req.params;
  AdditionalInformation.delete(id, res, {});
});

exports.AdditionalInformationRouter = Router;
