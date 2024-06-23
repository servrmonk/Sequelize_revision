const {  DataTypes } = require('sequelize');
const sequelize = require('./index')

const User = sequelize.define(
  'contacts', //tablename
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue:"Singh"
      // allowNull defaults to true
    },
  },{
    createdAt:true,
    updatedAt:'updated_at'
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
module.exports  = User;