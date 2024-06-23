const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("employeedb", "root", "sqllegasypassword24", {
  host: "localhost",
  dialect: "mysql",
  // logging: false,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

sequelize
  .sync({ force: false })
  .then(() => console.log("All models were synchronized successfully."))
  .catch((err) => console.error("Error synchronizing the models:", err));

module.exports = sequelize;
