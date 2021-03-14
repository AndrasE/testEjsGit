const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var input = [];


app.use(bodyParser.urlencoded({extdended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index", {
    whut: input,
  });
});

app.post("/", function(req, res) {
  var addItem = req.body.inPut;
   input.push(addItem);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("its on");
});
