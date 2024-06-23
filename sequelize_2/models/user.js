const {  DataTypes } = require('sequelize');
const sequelize = require('./index')

const User = sequelize.define(
  'User', 
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue:"Singh"
    },
  },{
    createdAt:true,
    updatedAt:'updated_at'
  }
);

console.log(User === sequelize.models.User);
module.exports  = User;