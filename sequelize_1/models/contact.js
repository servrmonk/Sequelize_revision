const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index");

const Contact = sequelize.define("Contact", {
  permanent_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  current_address: {
    type:DataTypes.STRING
  },
});
module.exports = Contact