require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');

const transporter = require("../../consts/transporter");

const router = express.Router();

router.route("/")
    .post((req, res) => {
        const email = req.body.email;
        const phone_number = req.body.phone_number;
        const name = req.body.name;
        let msg;

        if (req.body.msg) {
            msg = req.body.msg;
        } else {
            msg = "No Message";
        }

        if (email && phone_number && name) {
            transporter.sendMail({
                from: 'contact@bencoppe.io',
                to: 'benjamin.p.coppe@gmail.com',
                subject: name + ' Wants to get in touch',
                text: 'Email: ' + email + '\nPhone Number: ' + phone_number + '\nMessage: ' + msg
            }, (err, data) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        message: "Server side error, please contact site admin"
                    });
                } else {
                    console.log("Successfully sent email");
                    res.json({
                        success: true,
                        message: "Thank you for getting in touch"
                    });
                }
            });
        } else {
            res.json({
                success: false,
                message: "One or more fields are empty!"
            });
        }
    });

module.exports = router;