var express = require('express')
var router = express.Router()
const validation = require('../schema/validation')
const userController = require('../controllers/users.controller')

router.post('/register', validation.saveUser, userController.register)
router.post('/login', validation.login, userController.login)

module.exports = router
