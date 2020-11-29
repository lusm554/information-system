const Router = require('express').Router()
const { DisciplineTeacherRouter } = require('./intermediate/disciplineTeacherRouter')

Router.use('/dt', DisciplineTeacherRouter)

exports.intermediateRouter = Router
