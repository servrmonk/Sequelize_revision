const express = require("express");
const bodyParser = require("body-parser");

const db = require("./models");
const addUser = require("./controllers/userController");

const app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/adduser", addUser);

db.sync()
  .then(() => {
    console.log("All the table synced successfully");
    app.listen(3000, () => {
      console.log("App started on localhost 3000");
    });
  })
  .catch((err) => console.log("Error in syncing the tables ", err));
