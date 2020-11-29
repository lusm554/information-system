const path = require('path')
const app = require('express')()
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
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
const { GroupRouter } = require('./routes/groupRouter')

app.use('/discipline', disciplineRouter)
app.use('/group', GroupRouter)

app.listen(process.env.PORT)
