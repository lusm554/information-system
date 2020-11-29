const { StudentModel } = require('../models/student')
const { Model } = require('./index')

class Student extends Model {
	constructor(model) {
		super(model);
	}
}

exports.Student = new Student(StudentModel)
