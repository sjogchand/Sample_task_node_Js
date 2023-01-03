require('dotenv').config()
const jwt = require('jsonwebtoken')
const db = require('../models')
const Op = require('sequelize').Op

function generateJwtToken(userData) {
  return jwt.sign(userData, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: process.env.ACCESS_TOKEN_LIFE,
  })
}

const verifyJwtToken = async (req, res, next) => {
  let decodedToken
  const authHeader = req.get('Authorization')

  if (!authHeader) {
    return res.send({ status: 401, error: 'header key is required' })
  }

  const token = authHeader.split(' ')[1] // split token from bearer
  if (!token || token === '' || token === null) {
    return res.send({ status: 401, error: 'Invalid Token' })
  }

  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    console.log(error)
  }

  if (!decodedToken)
    return res.send({ status: 401, error: 'unauthorized request' })

  const validUser = await db.users
    .findOne({
      where: {
        email: { [Op.eq]: decodedToken.email },
        role: { [Op.eq]: decodedToken.role },
        status: {
          [Op.or]: {
            [Op.eq]: 1,
            [Op.is]: null,
          },
        },
      },
    })
    .catch((e) => {
      console.log(e)
    })
  if (!validUser)
    return res.send({ status: 401, error: 'unauthorized request' })
  return next()
}

module.exports = {
  generateJwtToken,
  verifyJwtToken,
}
