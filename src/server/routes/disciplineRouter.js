const Router = require('express').Router()
const { Discipline } = require('../controllers/discipline')

Router.get('/', (req, res) => {
  Discipline.getAll(res)
})

Router.get('/:id', (req, res) => {
  const { id } = req.params
  const { bycode } = req.query
  Discipline.get(id, res, bycode==='false'||bycode===undefined?false:true)
})

Router.post('/new', (req, res) => {
  const { name } = req.body
  new Discipline(name, res).save()
})

Router.delete('/:id', (req, res) => {
  const { id } = req.params
  const { bycode } = req.query
  Discipline.remove(id, res, bycode==='false'||bycode===undefined?false:true)
})

exports.disciplineRouter = Router