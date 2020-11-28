const mongoose = require('mongoose')

class Model {
  constructor(model) {
    this.model = model
  }

  save(field, res) {
    new this.model(field).save()
      .then((doc) => {
        res.json(doc)
      })
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          res.status(400).send('Validation error.')
        } else {
          console.log(error)
          res.status(500).send('Error while executing request.')
        }
      })
  }

  get(id, res, by_code = false) {
    if (by_code) {
      handleReq (
        this.model.findByCode(id),
        res
      )
    } else {
      handleReq(
         this.model.findById(id),
         res
      )
    }
  }

  getAll(res) {
    this.model.find({})
      .then((docs) => {
        res.json(docs)
      })
      .catch((error) => {
        console.log(error)
        res.status(500).send('Error occurred while getting documents.')
      })
  }

  delete(id, res, by_code = false) {
    if (by_code) {
      handleReq(
        this.model.findByCodeAndDelete(id),
        res
      )
    } else {
      handleReq(
        this.model.findByIdAndDelete(id),
        res
      )
    }
  }
}

function handleReq(req, res) {
 req
   .then((doc) => {
     if (doc === null) {
       res.status(400).send('Document not found.')
       return;
     }
     res.json(doc)
   })
   .catch((error) => {
     console.log(error)
     res.status(500).send('Error while executing request.')
   })
}

exports.Model = Model
