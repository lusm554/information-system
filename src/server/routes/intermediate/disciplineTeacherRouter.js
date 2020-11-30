const Router = require('express').Router()
const { DisciplineTeacher } = require('../../controllers/disciplineTeacher')

Router.get('/', (req, res) => {
	DisciplineTeacher.getAll(res)
})

Router.get('/:id', (req, res) => {
	const { id } = req.params
	DisciplineTeacher.get(id, res, { populate: { populate_by: ['Код_дисциплины', 'Код_преподавателя'] } })
})

Router.post('/new', (req, res) => {
	const { data } = req.body
	DisciplineTeacher.save(data, res)
})

Router.put('/:id', (req, res) => {
	const { id } = req.params
	const { field } = req.body
	DisciplineTeacher.change(id, res, field)
})

Router.delete('/:id', (req, res) => {
	const { id } = req.params
	DisciplineTeacher.delete(id, res, {})
})

exports.DisciplineTeacherRouter = Router
