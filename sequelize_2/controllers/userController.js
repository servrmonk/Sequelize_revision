const User = require("../models/user");
console.log("User in models user ", User);
var addUser = async (req, res) => {
    
  const jane = User.build({ firstName: "Jane", lastname: "singh" });
  console.log("Jane was saved in to to the db");
  console.log(jane instanceof User); // true
  console.log(jane.name); // "Jane"
  await jane.save();
  console.log("Jane was saved to the database!");
  console.log(jane.toJSON());
  res.status(200).json(jane.toJSON());
};

module.exports = addUser;
