const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `Database connection done!! ${conn.connection.host}`.green.bold
    );
  } catch (error) {
    console.log(`Connection error: ${error.message}`.red.bold);
    process.exit();
  } 
};

module.exports = connectDB;
