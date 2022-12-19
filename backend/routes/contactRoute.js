var express = require('express')
var router = express.Router()
const contactRoutes = require('../controllers/contact.controller')

router.post('/contact-us', contactRoutes.contactForm)

module.exports = router
