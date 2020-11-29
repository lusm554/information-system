const mongoose = require('mongoose')

const methods = {
  by_code(id, res, model) {
    handleReq(model.findByCode(id), res)
  }
}

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
          res.status(400).send(`Validation error: ${error.message}`)
        } else {
          console.log(error)
          res.status(500).send('Error while executing request.')
        }
      })
  }

  get(id, res, options) {
    for (let method in methods) {
      if (!(options[method] === 'false' || options[method] === undefined)) {
        methods[method](id, res, this.model)
        return;
      }
    }

    handleReq(
      this.model.findById(id),
      res
    )
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

  delete(id, res, { by_code = false }) {
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

  change(id, res, field) {
    handleReq(this.model.findByIdAndUpdate(id, field), res)
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
