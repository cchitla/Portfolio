require('dotenv').config();
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chrischitla@gmail.com",
    pass: process.env.MAILER_PASSWORD
  }
});

app.post("/email", (req, res) => {
  const mailOptions = {
    from: "sender@email.com",
    to: "chrischitla@gmail.com",
    subject: `Portfolio Message from ${req.body.nameInput}`,
    html: `<h4>From: ${req.body.nameInput}</h4>
           <h4>Email: ${req.body.emailInput}</h4>
           <h4>Message:</h4> <p>${req.body.messageInput}</p>`
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.json({Message: "There was an error sending the message", Error: err})
    }  else {
      console.log(info);
      res.json({ Message: "Message received", Info: info })
    }
  });
})

// Define API routes here


// Send every other request to the React app (API routes before this!)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
