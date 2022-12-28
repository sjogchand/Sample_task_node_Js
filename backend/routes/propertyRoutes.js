var express = require('express')
var router = express.Router()
const propertyRoutes = require('../controllers/property/property.controller')
const upload = require('../middlewares/upload')

router.get('/list', propertyRoutes.listProperty)
router.get('/:id', propertyRoutes.getPropertyById)
router.post(
  '/save',
  upload.array('properties_image', 30),
  propertyRoutes.saveProperty,
)
router.post(
  '/update',
  upload.array('properties_image', 30),
  propertyRoutes.updateProperty,
)

module.exports = router
