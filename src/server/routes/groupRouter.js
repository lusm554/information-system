const Router = require('express').Router()
const { Group } = require('../controllers/group')

Router.get('/', (req, res) => {
	Group.getAll(res)
})

Router.get('/:id', (req, res) => {
	const { id } = req.params
	Group.get(id, res, {})
})

Router.post('/new', (req, res) => {
	const {
		code,
		number,
		date_created,
		form_of_study,
		price,
		is_study_over
	} = req.body

	Group.save(
		{
			'Код группы': code,
			'Номер группы': number,
			'Дата образования': date_created,
			'Форма обучения': form_of_study,
			'Плата за семестр': price,
			'Обучение закончено': is_study_over
		},
		res
	)
})

Router.put('/:id', (req, res) => {
	const { id } = req.params
	const { field } = req.body

	Group.change(id, res, field)
})

Router.delete('/:id', (req, res) => {
	const { id } = req.params
	Group.delete(id, res, {})
})

exports.groupRouter = Router
