const path = require('path')
const app = require('express')()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config({ path: path.join(process.cwd(), 'src', 'config', '.env') })

mongoose.connect(process.env.MongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
  // Handle initial connection errors
  .catch(console.error)
// Handle errors after initial connection was established
mongoose.connection.on('error', console.error)

app.use(require('cors')()) // Cors for requests
app.use(bodyParser.json())

const { disciplineRouter } = require('./routes/disciplineRouter')

app.use('/discipline', disciplineRouter)

app.listen(process.env.PORT)