const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TeacherSchema = new Schema(
	{
		"Код преподавателя": Number,
		"Фамилия": { type: String, maxlength: 15, required: true },
		"Имя": { type: String, maxlength: 15, required: true },
		"Отчество": { type: String, maxlength: 15 },
		"Пол": {
			type: String,
			maxlength: 7,
			default: 'Мужской',
			required: true,
			validate: function() {
				const gender = this["Пол"]
				return gender === 'Мужской' || gender === 'Женский'
			}
		},
		"Фотография": { type: Buffer },
		"Дата рождения": { type: Date, required: true },
		"Дата приема": { type: Date, required: true },
		"Телефон": { type: String }
	}
)

TeacherSchema.pre('save', async function(next) {
	// Update date
	this.updatedAt = new Date()

	// Update counter
	this["Код преподавателя"] = await TeacherModel.countDocuments() + 1;

	if (this["Телефон"]) {
		this["Телефон"] = '9-' + this["Телефон"]
	}
	next()
})

const TeacherModel = mongoose.model("Преподаватель", TeacherSchema)
exports.TeacherModel = TeacherModel
