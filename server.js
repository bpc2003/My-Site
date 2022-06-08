require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const homeAPI = require("./routes/api/home");
const contactAPI = require("./routes/api/contact");

mongoose.connect("mongodb+srv://admin:" + process.env.MONGO_PASS + "@cluster0.l20et.mongodb.net/SkillsDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

const app = express();

app.use(express.json());

app.use("/api/home", homeAPI);
app.use("/api/contact", contactAPI);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static("./client/build"));
}

console.log(process.env.PORT)
const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Running on port " + port);
});
