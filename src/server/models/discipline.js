const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DisciplineSchema = new Schema(
  {
    "Код дисциплины": { type: Number },
    "Название": { type: String, required: true, maxlength: 20 }
  }
)

DisciplineSchema.pre('save', async function(next) {
  // Update date
  this.updatedAt = new Date()
  
  this["Код дисциплины"] = await DisciplineModel.countDocuments() + 1;
  next()
})

DisciplineSchema.statics.findByCode = function(code) {
  return this.findOne({ "Код дисциплины": code })
}

DisciplineSchema.statics.findByCodeAndDelete = function(code) {
  return this.findOneAndDelete({ "Код дисциплины": code })
}

const DisciplineModel = mongoose.model("Код дисциплины", DisciplineSchema)
exports.DisciplineModel = DisciplineModel
