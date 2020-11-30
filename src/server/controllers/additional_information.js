const { AdditionalInformationModel } = require('../models/additional_information')
const { Model } = require('./index')

class AdditionalInformation extends Model {
	constructor(model) {
		super(model);
	}
}

exports.AdditionalInformation = new AdditionalInformation(AdditionalInformationModel)
