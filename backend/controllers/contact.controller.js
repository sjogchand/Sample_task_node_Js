const nodemailer = require('nodemailer')
const config = require('../config/constants.json')

const contactForm = (req, res) => {
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
      to: 'sachinjokchand@gmail.com',
      subject: 'Request for new Property In Area',
      html: `Hi, <br><br>${details.fullName} is looking for new property In area ${details.area}.<br><br> 
      Email: ${details.email}.<br><br> 
      Phone: ${details.phone}.<br><br> 
      Thank you`,
    })

    return res.json({ status: 200, message: 'Mail sent successfully' }).send()
  })
}

module.exports = {
  contactForm,
}
