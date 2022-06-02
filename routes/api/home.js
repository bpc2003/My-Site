const express = require('express');

const Skill = require("../../models/Skill");
const Cert = require("../../models/Cert");

const router = express.Router();

router.route("/")
    .get(async (req, res) => {
        const Skills = await Skill.find({});
        const Certs = await Cert.find({});

        res.json([Skills, Certs]);
    });

module.exports = router;