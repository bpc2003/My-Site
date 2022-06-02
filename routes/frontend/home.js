require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

const Skill = require("../../models/Skill");
const Cert = require("../../models/Cert");
const currentYear = require("../../consts/currentYear");

const router = express.Router();


router.route("/")
  .get(async (req, res) => {
    const skills = await Skill.find({});
    const certs = await Cert.find({});

    res.render("index", {
      pageTitle: "Ben Coppe",
      skills: skills,
      certs: certs,
      currentYear: currentYear
    })
  })

module.exports = router;
