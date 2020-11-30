const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DisciplineTeacherSchema = new Schema(
	{
		"Код_ПД": Number,
		"Код_дисциплины": { type: mongoose.Schema.Types.ObjectId, ref: 'Код дисциплины', required: true },
		"Код_преподавателя": { type: mongoose.Schema.Types.ObjectId, ref: 'Преподаватель', required: true },
	}
)

DisciplineTeacherSchema.pre('save', async function(next) {
	// Update date
	this.updatedAt = new Date()

	// Update counter
	this["Код_ПД"] = await DisciplineTeacherModel.countDocuments() + 1;
	next()
})

const DisciplineTeacherModel = mongoose.model('Преподаватель-Дисциплина', DisciplineTeacherSchema)
exports.DisciplineTeacherModel = DisciplineTeacherModel
