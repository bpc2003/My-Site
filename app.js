const bodyParser = require('body-parser');
const fs = require('fs');
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

var jsonData;
var data;

try {
  jsonData = fs.readFileSync(__dirname + '/login.json');
  data = JSON.parse(jsonData);
} catch(e) {
  console.log(e);
}

const transporter = nodemailer.createTransport(data);

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/Contact-Me", function(req, res) {
  res.sendFile(__dirname + "/contact-me.html");
});

app.post("/Contact-Me", function(req, res) {
  let email = req.body.Email;
  let phoneNumber = req.body.phoneNumber;
  let name = req.body.name;
  var msg;

  if (req.body.msg.length > 0) {
    msg = req.body.msg;
  } else {
    msg = "No Message";
  }

  if (email.length > 0 && phoneNumber.length > 0 && name.length > 0) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      transporter.sendMail({
        from: 'benjamin.p.coppe@gmail.com',
        to: 'benjamin.p.coppe@gmail.com',
        subject: name + ' Wants to get in touch',
        text: 'Email: ' + email + '\nPhone Number: ' + phoneNumber + '\nMessage: ' + msg
      }, function(err, data) {
        if (err) {
          console.log(err);
          res.sendFile(__dirname + "/failure.html");
        } else {
          console.log("Sent Email successfully");
          res.sendFile(__dirname + "/thanks.html");
        }
      });
    }
  } else {
    res.sendFile(__dirname + "/failure.html");
  }
});

app.post("/failure", function(req, res) {
  res.redirect("/Contact-Me");
});

app.listen(25565, function() {
  console.log("Running on port 25565");
});
