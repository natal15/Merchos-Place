const router = require('express').Router()

const authRoutes = require('./auth')
const usersRoutes = require('./users')
const dogsRoutes = require('./dogs')

module.exports = (db) => {
    router.use('/auth', authRoutes(db))
    router.use('/users', usersRoutes(db))
    router.use('/dogs', dogsRoutes(db))

    return router
}