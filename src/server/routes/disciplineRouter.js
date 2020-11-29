const Router = require('express').Router()
const { Discipline } = require('../controllers/discipline')

Router.get('/', (req, res) => {
  Discipline.getAll(res)
})

Router.get('/:id', (req, res) => {
  const { id } = req.params
  let { by_code } = req.query
  by_code = !(by_code === 'false' || by_code === undefined)

  Discipline.get(id, res, { by_code })
})

Router.post('/new', (req, res) => {
  const { data } = req.body
  Discipline.save(data, res)
})

Router.put('/:id', (req, res) => {
  const { id } = req.params
  const { field } = req.body
  Discipline.change(id, res, field)
})

Router.delete('/:id', (req, res) => {
  const { id } = req.params
  let { by_code } = req.query
  by_code = !(by_code === 'false' || by_code === undefined)
  Discipline.delete(id, res, { by_code })
})

exports.disciplineRouter = Router
