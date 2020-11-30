const Router = require('express').Router()
const { Assessment } = require('../controllers/assessment')

Router.get('/', (req, res) => {
  Assessment.getAll(res)
})

Router.get('/:id', (req, res) => {
  const { id } = req.params
  Assessment.get(id, res, { populate: { populate_by: ['Код_студента', 'Код_ПД'] } })
})

Router.post('/new', (req, res) => {
  const { data } = req.body
  Assessment.save(data, res)
})

Router.put('/:id', (req, res) => {
  const { id } = req.params
  const { field } = req.body
  Assessment.change(id, res, field)
})

Router.delete('/:id', (req, res) => {
  const { id } = req.params
  Assessment.delete(id, res, { by_code })
})

exports.assessmentRouter = Router
