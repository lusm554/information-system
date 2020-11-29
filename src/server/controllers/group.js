const { GroupModel } = require('../models/group')
const { Model } = require('./index')

class Group extends Model {
	constructor(model) {
		super(model)
	}
}

exports.Group = new Group(GroupModel)
