const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MONGODB", error);
    process.exit(0); //exit with failure
  }
};

module.exports = connectDB;
