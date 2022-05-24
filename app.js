require('dotenv').config();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://localhost:27017/SkillsDB');

const SkillSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  }
});

const Skill = new mongoose.model('Skill', SkillSchema);

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');

let jsonData;
let certificates;

try {
  jsonData = fs.readFileSync(__dirname + '/skills.json');
  certificates = JSON.parse(jsonData);
} catch (e) {
  console.log(e)
}

let isActive = true;

let date = new Date();
let currentYear = date.getFullYear()

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "benjamin.p.coppe@gmail.com",
    pass: process.env.PASS
  }
});

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  Skill.find({}, function(err, skills) {
    res.render("index", {
      pageTitle: "Ben Coppe",
      skills: skills,
      certificates: certificates.Certificates,
      currentYear: currentYear
    });
  });
});

app.get("/about-me", function(req, res) {
  res.render("about", {
    pageTitle: "About Me",
    currentYear: currentYear
  });
});

app.get("/Contact-Me", function(req, res) {
  res.render("contact-me", {
    pageTitle: "Contact Me",
    currentYear: currentYear
  });
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
    transporter.sendMail({
      from: 'benjamin.p.coppe@gmail.com',
      to: 'benjamin.p.coppe@gmail.com',
      subject: name + ' Wants to get in touch',
      text: 'Email: ' + email + '\nPhone Number: ' + phoneNumber + '\nMessage: ' + msg
    }, function(err, data) {
      if (err) {
        console.log(err);
        res.render("failure", {
          currentYear: currentYear
        });
      } else {
        console.log("Sent Email successfully");
        res.render("thanks", {
          pageTitle: "Thank You",
          name: name.split(" ")[0],
          currentYear: currentYear
        });
      }
    });
  } else {
    res.render("failure", {
      currentYear: currentYear
    });
  }
});

app.post("/failure", function(req, res) {
  res.redirect("/Contact-Me");
});

app.listen(3000, function() {
  console.log("Running on port 3000");
});
