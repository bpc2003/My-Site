require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const home = require("./routes/frontend/home");
const contact = require("./routes/frontend/contact");
const about = require("./routes/frontend/about");

const homeAPI = require("./routes/api/home");
const contactAPI = require("./routes/api/contact");

mongoose.connect("mongodb://localhost:27017/SkillsDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

const app = express();

app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.use("/", home)
app.use("/contact-me", contact)
app.use("/about-me", about)
app.post("/failure", function(req, res) {
  res.redirect("/Contact-Me");
});

app.use("/api/home", homeAPI);
app.use("/api/contact", contactAPI);

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Running on port " + port);
});