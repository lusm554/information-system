const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema(
	{
		"Код студента": Number,
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
		"Код группы": { type: Schema.Types.ObjectId, ref: 'Группа', required: true },
		"Паспорт-серия": { type: String, maxlength: 4 },
		"Паспорт-номер": { type: String, maxlength: 6 },
		"Фотография": { type: Buffer },
		"Страна": { type: String, maxlength: 15 },
		"Город": { type: String, maxlength: 20 },
		"Улица": { type: String, maxlength: 30 },
		"Дом": { type: String, maxlength: 10 },
		"Квартира": { type: String, maxlength: 5 }
	}
)

StudentSchema.pre('save', async function(next) {
	// Update date
	this.updatedAt = new Date()

	// Update counter
	this["Код студента"] = await StudentModel.countDocuments() + 1;
	next()
})

const StudentModel = mongoose.model('Студент', StudentSchema)
exports.StudentModel = StudentModel
