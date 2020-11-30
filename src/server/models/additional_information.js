const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdditionalInformationSchema = new Schema(
{
  'Код_студента': { type: mongoose.Schema.Types.ObjectId, ref: 'Студент', required: true },
  'Паспорт-серия': { type: String, maxlength: 4 },
  'Паспорт-номер': { type: String, maxlength: 6 },
  'Фотография': { type: Buffer },
  'Сем-положение': String,
  'Страна': { type: String, maxlength: 15 },
  'Город': { type: String, maxlength: 20 },
  'Улица': { type: String, maxlength: 30 },
  'Дом': { type: String, maxlength: 10 },
  'Квартира': { type: String, maxlength: 5 },
},
);

const AdditionalInformationModel = mongoose.model('Доп_Сведения', AdditionalInformationSchema);
exports.AdditionalInformationModel = AdditionalInformationModel;
