const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("employeedb", "root", "sqllegasypassword24", {
  host: "localhost",
  dialect: "mysql",
  // logging: false,
});

// Testing the connection
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// sync here instead of doing multiple sync we can do at once 
sequelize.sync({force:false})

module.exports = sequelize;