const { DisciplineTeacherModel } = require('../models/intermediate/disciplineTeacher')
const { Model } = require('./index')

class DisciplineTeacher extends Model {
	constructor(model) {
		super(model);
	}
}

exports.DisciplineTeacher = new DisciplineTeacher(DisciplineTeacherModel)
