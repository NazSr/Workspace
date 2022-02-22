const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  var firstname = req.body.firstName;
  var lastname = req.body.lastName;
  var emailId = req.body.email;
  console.log(firstname, lastname, emailId);

  if (res.statusCode === 200){
    res.sendFile(__dirname + "/success.html");
  }
  else{
    res.sendFileF(__dirname + "/failure.html");
  }
})

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
