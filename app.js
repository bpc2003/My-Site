const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const express = require('express');
const fs = require('fs');


const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');

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
  res.render("index", {pageTitle: "Ben Coppe"});
});

app.get("/Contact-Me", function(req, res) {
  res.render("contact-me", {pageTitle: "Contact Me"});
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
          res.render("failure");
        } else {
          console.log("Sent Email successfully");
          res.render("thanks", {pageTitle: "Thank You", name: " " + name.split(" ")[0]});
        }
      });
    } else {
      res.render("failure");
    }
  } else {
    res.render("failure");
  }
});

app.post("/failure", function(req, res) {
  res.redirect("/Contact-Me");
});

app.listen(25565, function() {
  console.log("Running on port 25565");
});
