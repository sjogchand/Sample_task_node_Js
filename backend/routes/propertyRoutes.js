var express = require('express')
var router = express.Router()
const propertyController = require('../controllers/property.controller')
const upload = require('../middlewares/upload')

router.get('/list', propertyController.listProperty)
router.get('/:id', propertyController.getPropertyById)
router.post(
  '/save',
  upload.array('properties_image', 30),
  propertyController.saveProperty,
)
router.post(
  '/update',
  upload.array('properties_image', 30),
  propertyController.updateProperty,
)

router.post('/delete', propertyController.deleteProperty)

module.exports = router
