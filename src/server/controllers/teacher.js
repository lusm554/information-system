const { TeacherModel } = require('../models/teacher');
const { Model } = require('./index');

class Teacher extends Model {
  constructor(model) {
    super(model);
  }
}

exports.Teacher = new Teacher(TeacherModel);
