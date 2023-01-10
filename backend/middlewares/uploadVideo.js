const util = require('util')
const multer = require('multer')
const maxSize = '50M'

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'property_video') cb(null, './uploads/videos')
    else cb(null, './uploads/images')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
  },
})

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).fields([
  {
    name: 'property_video',
    maxCount: 1,
  },
  {
    name: 'property_images',
    maxCount: 50,
  },
])

let uploadFileMiddleware = util.promisify(uploadFile)
module.exports = uploadFileMiddleware

module.exports = {
  uploadFileMiddleware,
}
