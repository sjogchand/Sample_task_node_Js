const db = require('../models')
const Op = require('sequelize').Op
const bcrypt = require('bcrypt')
const auth = require('../middlewares/authentication')

const register = async (req, res) => {
  const userParams = req.body
  const checkUser = await db.users
    .findOne({
      where: {
        email: {
          [Op.eq]: userParams.email,
        },
        status: { [Op.eq]: 1 },
      },
    })
    .catch((e) => {
      console.log(e)
      res.status(422).json({ error: 'Duplicate User' }).send()
    })
  if (checkUser)
    return res.send({ status: 422, message: 'Duplicate User Name' })

  const saltRounds = 12
  const pasData = await bcrypt.hash(userParams.password, saltRounds)

  await db.users
    .create({
      first_name: userParams.first_name,
      last_name: userParams.last_name,
      email: userParams.email,
      password: pasData,
      phone: userParams.phone,
      address: userParams.address,
      state: userParams.state,
      country: userParams.country,
      zip: userParams.zip,
      role: 1,
      status: 2,
    })
    .catch((e) => {
      console.log(e)
    })
  res.send({
    status: 200,
    message: 'User data saved successfully',
  })
}

const login = async (req, res) => {
  const loginParams = req.body
  let role_name
  const loginData = await db.users
    .findOne({
      where: {
        email: { [Op.eq]: loginParams.email },
        status: {
          [Op.or]: {
            [Op.eq]: 1,
            [Op.is]: null,
          },
        },
      },
    })
    .catch((err) => {
      console.log(err)
    })

  if (
    loginData &&
    (await bcrypt.compare(loginParams.password, loginData.password))
  ) {
    const token = auth.generateJwtToken({
      email: loginData.email,
      role: loginData.role,
    })

    if (loginData.role === 1) {
      role_name = 'Admin'
    } else if (loginData.role === 3) {
      role_name = 'Employee'
    }
    return res.status(200).send({
      status: 200,
      success: true,
      message: 'Login Successfully',
      type: 'Bearer',
      access_token: token,
      role: loginData.role,
      role_name,
      email: loginData.email,
      isActive: 'Active',
      isActiveValue: loginData.status,
    })
  }
  return res
    .status(400)
    .json({ status: 400, message: 'Invalid Credentials' })
    .send()
}

module.exports = {
  login,
  register,
}
