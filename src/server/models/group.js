const mongoose = require('mongoose')
const Schema = mongoose.Schema

const forms_of_education = [
	'Очная',
	'Очно-заочная',
	'Заочное традиционное',
	'Заочное дистанционное',
	'Заочное сетевое',
	'Заочное ускоренное',
	'Заочное второе высшее'
]

const GroupSchema = new Schema(
	{
		"Код группы": { type: Number },
		"Номер группы": { type: String, maxlength: 6, required: true },
		"Дата образования": { type: Date, required: true },
		"Форма обучения": {
			type: String,
			maxlength: 25,
			default: 'Очная',
			required: true,
			validate: [
				function() {
				return forms_of_education.includes(this["Форма обучения"])
				},
				'Такой формы обучения нет, правильно введите данные.'
			]
		},
		"Плата за семестр": { type: Number, require: true },
		"Обучение закончено": { type: Boolean, require: true }
	}
)

const GroupModel = mongoose.model('Группа', GroupSchema)
exports.GroupModel = GroupModel
