const express = require('express');
const currentYear = require("../../consts/currentYear");

const router = express.Router();

router.route("/")
  .get((req, res) => {
    res.render("about", {
      pageTitle: "About Me",
      currentYear: currentYear
    })
  });

module.exports = router;
