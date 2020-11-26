const mongoose = require('mongoose')
const { DisciplineModel } = require('../models/discipline')

class Discipline {
  constructor(name, res) {
    this.name = name
    this.res = res
  }

  async save() {
    new DisciplineModel( {"Название": this.name} ).save((err, doc) => {
      if (err) {
        if (err instanceof mongoose.Error.ValidationError) {
          this.res.status(400).send('The name of the discipline should be no more than 20 characters.')
        } else {
          this.res.status(500).send('An error occurred while saving discipline.')
          console.log(err)
        }
        return;
      }
      this.res.json(doc)
    })
  }

  static get(id, res, bycode = false) {
    if (bycode) {
      handleGetReq(DisciplineModel.findByCode(id), res)
      return;
    }
    handleGetReq(DisciplineModel.findById(id), res)
  }

  static getAll(res) {
    handleGetReq(DisciplineModel.find({}), res)
  }

  static remove(id, res, bycode = false) {
    if (bycode) {
      handleDelReq(DisciplineModel.findByCodeAndDelete(id), res)
      return;
    }
    handleDelReq(DisciplineModel.findByIdAndDelete(id), res)
  } 
}

function handleGetReq(method, res) {
  method.then((doc) => {
    if (doc===null) {
      res.status(400).send('Document not found.')
      return;
    }
    res.json(doc)
  })
  method.catch((error) => {
    if (error instanceof mongoose.Error.CastError) {
      res.status(400).send('Document not found.')
    } else {
      console.log(error)
      res.status(500).send('An error occurred while obtaining discipline.')
    }
  })
}

function handleDelReq(method, res) {
  method
    .then(() => res.sendStatus(200))
    .catch((error) => {
      if (error instanceof mongoose.Error.CastError) {
        res.status(400).send('Document not found.')
      } else {
        console.log(error)
        res.status(500).send('An error occurred while deleting document.')
      }
    })
}

exports.Discipline = Discipline