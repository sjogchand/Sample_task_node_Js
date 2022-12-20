const nodemailer = require('nodemailer')
const config = require('../config/constants.json')
const db = require('../models')

const contactForm = async (req, res) => {
  let details = req.body

  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: config.mailer_username,
        pass: config.mailer_password,
      },
    })
    let info = transporter.sendMail({
      to: 'support@milenium.haus',
      subject: 'Request for new Property In Area',
      html: `Hi, <br><br>${details.fullName} is looking for new property In area ${details.area}.<br><br>
      Email: ${details.email}.<br><br>
      Phone: ${details.phone}.<br><br>
      Thank you`,
    })
  })

  const contactUsData = await db.contact_us
    .create({
      full_name: details.fullName,
      email: details.email,
      phone: details.phone,
      area: details.area,
      status: 1,
    })
    .catch((e) => {
      console.log(e)
      return res.send({ status: 200, message: "Contact us data couldn't save" })
    })
  res.send({
    status: 200,
    message: 'Contact us data saved successfully',
    json: contactUsData,
  })
}

module.exports = {
  contactForm,
}
