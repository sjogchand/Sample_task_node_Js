var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')

var app = express()
var cors = require('cors')

const bodyParser = require('body-parser')

app.use(cors()) // Use this after the variable declaration
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// body-parser & multer
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json({ limit: '5mb' }))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))

//APIs Routes
app.use('/', indexRouter)
app.use('/api/properties', require('./routes/propertyRoutes'))
app.use('/api/contact', require('./routes/contactRoute'))
app.use('/api/users', require('./routes/usersRoutes'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  // eslint-disable-next-line no-constant-condition
  res.locals.error = req.app.get('env') === 'development' || 'test' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
