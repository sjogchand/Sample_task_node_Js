const schema = require('./schema')
module.exports = {
  saveUser: async (req, res, next) => {
    const validateCheck = await schema.saveUser.validate(req.body)
    if (validateCheck.error) {
      res.json({
        status: 400,
        msg: validateCheck.error.details[0].message,
      })
    } else {
      next()
    }
  },
  login: async (req, res, next) => {
    const validateCheck = await schema.login.validate(req.body)
    if (validateCheck.error) {
      res.json({
        status: 400,
        msg: validateCheck.error.details[0].message,
      })
    } else {
      next()
    }
  },
}
