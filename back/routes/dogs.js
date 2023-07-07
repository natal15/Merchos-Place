const router = require('express').Router()
const controllers = require('../controllers/dogs')

module.exports = (db) => {
    router.get('/', controllers.getAll(db))
    router.get('/dogname', controllers.getOne(db))



    return router
}