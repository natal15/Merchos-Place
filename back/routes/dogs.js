const router = require('express').Router()
const controllers = require('../controllers/dogs')

module.exports = (db) => {
    router.get('/', controllers.getAll(db))
    router.get('/dogname/:id', controllers.getOne(db))
    router.delete('/:id', controllers.deleteOne(db))
    router.post('/', controllers.createOne(db))
    router.put('/:id', controllers.modOne(db))
    router.post('/more', controllers.createMore(db))



    return router
}