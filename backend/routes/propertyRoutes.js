var express = require('express')
var router = express.Router()
const propertyController = require('../controllers/property.controller')
// const upload = require('../middlewares/upload')
const { uploadFileMiddleware } = require('../middlewares/upload')

router.get('/list', propertyController.listProperty)
router.get('/:id', propertyController.getPropertyById)
router.post('/save', uploadFileMiddleware, propertyController.saveProperty)
router.post('/update', uploadFileMiddleware, propertyController.updateProperty)

router.post('/delete', propertyController.deleteProperty)

module.exports = router
