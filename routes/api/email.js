const router = require("express").Router;
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chrischitla@gmail.com",
    pass: process.env.MAILER_PASSWORD
  }
});

const mailOptions = {
  from: "sender@emial.com",
  to: "chrischitla@gmail.com",
  subject: "Message from my Portfolio",
  html: "<p>Your html here</p>" //plain text body
}

const sendMail = () => {
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  })
}

router.route("/api/sendmail")
  .post(sendMail)

module.exports = router;