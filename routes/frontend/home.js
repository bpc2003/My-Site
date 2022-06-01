require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const Skill = require("../../models/Skill");
const currentYear = require("../../consts/currentYear");

const router = express.Router();
let jsonData;
let certificates;

try {
  jsonData = fs.readFileSync(__dirname + '/certificates.json');
  certificates = JSON.parse(jsonData);
} catch (e) {
  console.log(e)
}

router.route("/")
  .get((req, res) => {
    Skill.find()
      .then(skills =>
        res.render("index", {
          pageTitle: "Ben Coppe",
          skills: skills,
          certificates: certificates.Certificates,
          currentYear: currentYear
        }
      )
    )
  })

module.exports = router;
