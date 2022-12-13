var express = require('express')
var router = express.Router()
const propertyRoutes = require('../controllers/property/property.controller')
const upload = require('../middlewares/upload')

router.get('/list', propertyRoutes.listProperty)
router.post(
  '/save',
  upload.single('properties_image'),
  propertyRoutes.saveProperty,
)

module.exports = router
