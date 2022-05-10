const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'benjamin.p.coppe@gmail.com',
    pass: 'Fu77$t@ck'
  }
});

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/Contact-Me", function(req, res) {
  res.sendFile(__dirname + "/contact-me.html");
});

app.post("/Contact-Me", function(req, res) {
  res.sendFile(__dirname + "/thanks.html");
  let email = req.body.Email;
  let phoneNumber = req.body.phoneNumber;
  let msg = req.body.msg;
  let name = req.body.name

  transporter.sendMail({
    from: email,
    to: 'benjamin.p.coppe@gmail.com',
    subject: name + ' Wants to get in touch',
    text: 'Email: ' + email + '\nPhone Number: ' + phoneNumber + '\nMessage: ' + msg
  }, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent Email successfully");
    }
  });
});

app.listen(25565, function() {
  console.log("Running on port 25565");
});
