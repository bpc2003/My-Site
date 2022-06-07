require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 587,
  auth: {
    user: "contact@bencoppe.io",
    pass: process.env.EMAIL_PASS
  }
});