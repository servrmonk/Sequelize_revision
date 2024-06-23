const express = require("express");
const bodyParser = require("body-parser");

const db = require('./models') //u have to include model/index so it will automatically sync

const User = require('./models/user')
const Contact = require('./models/contact');
const sequelize = require("./models");

// what if i have 100 table like user contact then i have to sync 100 tables ...? no there is 2 method to sync using sequelize.sync inside

const app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

// User.sync({force:true}) //if table User already in db than it will drop and make the table again, it alwaysdelete and create the table
// User.sync()
// Contact.sync({force:true})

db.sync()
  .then(() => {
    console.log("All the table synced successfully");
    app.listen(3000, () => {
      console.log("App started on localhost 3000");
    });
  })
  .catch((err) => console.log("Error in syncing the tables ", err));


// app.listen(3000, () => console.log("App listening on 3000"));
