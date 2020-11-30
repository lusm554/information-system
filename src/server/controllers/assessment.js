const { AssessmentModel } = require('../models/assessment')
const { Model } = require('./index')

class Assessment extends Model {
	constructor(model) {
		super(model);
	}
}

exports.Assessment = new Assessment(AssessmentModel)
