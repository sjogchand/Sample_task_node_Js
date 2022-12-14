const util = require('util')
const multer = require('multer')
const maxSize = '50M'

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'property_video') cb(null, './uploads/videos')
    else cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname.replace(/\s+/g, '-').toLowerCase())
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

// const multer = require('multer');

// var storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, './uploads');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
//   }
// });
// var upload = multer({ storage: storage });

// module.exports = upload;
