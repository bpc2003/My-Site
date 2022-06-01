require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');

const transporter = require("../../consts/transporter");
const currentYear = require("../../consts/currentYear");

const router = express.Router();

router.use(express.urlencoded({ extended: true }))

router.route("/")
  .get((req, res) => {
    res.render("contact-me", {
      pageTitle: "Contact Me",
      currentYear: currentYear
    })
  })
  .post((req, res) => {
    let email = req.body.Email;
    let phoneNumber = req.body.phoneNumber;
    let name = req.body.name;
    let msg;

    if (req.body.msg.length > 0) {
      msg = req.body.msg;
    } else {
      msg = "No Message";
    }

    if (email.length > 0 && phoneNumber.length > 0 && name.length > 0) {
      transporter.sendMail({
        from: 'contact@bencoppe.io',
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

module.exports = router;
