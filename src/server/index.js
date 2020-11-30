const path = require('path');
const app = require('express')();
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const bodyParser = require('body-parser');
require('dotenv').config({ path: path.join(process.cwd(), 'src', 'config', '.env') });

mongoose.connect(process.env.MongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
// Handle initial connection errors
.catch(console.error);
// Handle errors after initial connection was established
mongoose.connection.on('error', console.error);

app.use(require('cors')()); // Cors for requests
app.use(bodyParser.json());

const { disciplineRouter } = require('./routes/disciplineRouter');
const { groupRouter } = require('./routes/groupRouter');
const { teacherRouter } = require('./routes/teacherRouter');
const { studentRouter } = require('./routes/studentRouter');
const { intermediateRouter } = require('./routes/intermediate');
const { assessmentRouter } = require('./routes/assessmentRouter');

app.use('/discipline', disciplineRouter);
app.use('/group', groupRouter);
app.use('/teacher', teacherRouter);
app.use('/student', studentRouter);
app.use('/intermediate', intermediateRouter);
app.use('/assessment', assessmentRouter);

app.listen(process.env.PORT);
