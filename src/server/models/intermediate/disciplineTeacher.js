const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DisciplineTeacherSchema = new Schema(
	{
		"Код_ПД": String,
		"Код_дисциплины": { type: mongoose.Schema.Types.ObjectId, ref: 'Код дисциплины', required: true },
		"Код_преподавателя": { type: mongoose.Schema.Types.ObjectId, ref: 'Преподаватель', required: true },
	}
)

const DisciplineTeacherModel = mongoose.model('Преподаватель-Дисциплина', DisciplineTeacherSchema)
exports.DisciplineTeacherModel = DisciplineTeacherModel
