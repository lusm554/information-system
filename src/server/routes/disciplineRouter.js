const Router = require('express').Router()
const { Discipline } = require('../controllers/discipline')

Router.get('/', (req, res) => {
  Discipline.getAll(res)
})

Router.get('/:id', (req, res) => {
  const { id } = req.params
  const { by_code } = req.query
  Discipline.get(id, res, !(by_code === 'false' || by_code === undefined))
})

Router.post('/new', (req, res) => {
  const { name } = req.body
  const field = { 'Название': name }
  Discipline.save(field, res)
})

Router.delete('/:id', (req, res) => {
  const { id } = req.params
  const { by_code } = req.query
  Discipline.delete(id, res, !(by_code === 'false' || by_code === undefined))
})

exports.disciplineRouter = Router
