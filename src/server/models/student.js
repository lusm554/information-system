const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema(
	{
		"Код_студента": Number,
		"Код_группы": { type: mongoose.Schema.Types.ObjectId, ref: 'Группа', required: true },
		"Фамилия": { type: String, maxlength: 15, required: true },
		"Имя": { type: String, maxlength: 15, required: true },
		"Отчество": { type: String, maxlength: 15 },
		"Пол": {
			type: String,
			maxlength: 7,
			default: 'Мужской',
			validate: function() {
				const gender = this["Пол"]
				return gender === 'Мужской' || gender === 'Женский'
			},
			required: true
		},
		"Дата рождения": { type: Date, required: true },
	}
)

StudentSchema.pre('save', async function(next) {
	// Update date
	this.updatedAt = new Date()

	// Update counter
	this["Код_студента"] = await StudentModel.countDocuments() + 1;
	next()
})

const StudentModel = mongoose.model('Студент', StudentSchema)
exports.StudentModel = StudentModel
