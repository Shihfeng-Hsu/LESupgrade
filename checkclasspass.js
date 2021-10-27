const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/LESDB");

const student = {
name:String,
rank:String,
passClass:[],
};

const Student = mongoose.model("Student",articleSchema)


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
