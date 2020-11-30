const { DisciplineModel } = require('../models/discipline');
const { Model } = require('./index');

class Discipline extends Model {
  constructor(model) {
    super(model);
  }
}

exports.Discipline = new Discipline(DisciplineModel);
