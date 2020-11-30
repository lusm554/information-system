const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AssessmentSchema = new Schema(
	{
		"Код_записи": Number,
		"Код_студента": { type: mongoose.Schema.Types.ObjectId, ref: 'Студент', required: true },
		"Семестр": {
			type: Number,
			required: true,
			validate: function() {
				return this['Семестр'] <= 10
			}
		},
		"Дата": { type: Date, required: true },
		"Код_ПД": { type: mongoose.Schema.Types.ObjectId, ref: 'Преподаватель-Дисциплина', required: true },
		"Вид контроля": {
			type: String,
			maxlength: 15,
			required: true,
			validate: function() {
				const types = ['зачет', 'экзамен', 'курсовая работа', 'отчет']
				return types.includes(this["Вид контроля"])
			}
		},
		"Оценка": {
			type: Number,
			required: true,
			validate: function() {
				const assessments = [0, 2, 3, 4, 5, -1, 1]
				return assessments.includes(this['Оценка'])
			}
		}
	}
)

AssessmentSchema.pre('save', async function(next) {
	// Update date
	this.updatedAt = new Date()

	// Update counter
	this["Код_записи"] = await AssessmentModel.countDocuments() + 1;
	next()
})

const AssessmentModel = mongoose.model('Оценка', AssessmentSchema)
exports.AssessmentModel = AssessmentModel
