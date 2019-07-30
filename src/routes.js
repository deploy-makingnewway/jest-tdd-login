const routes = require('express').Router();

const authMiddleware = require('../src/middleware/auth')

const SessionController = require('../src/app/controllers/SessionController')

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.get('/dashboard', (req, res) => {
    res.status(200).send()
})

module.exports = routes;