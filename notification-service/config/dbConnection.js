const mongoose = require("mongoose");
const config = require("./index");

const connectDb = async () => {
  try {
    // const connect = await mongoose.connect("mongodb://admin:admin@localhost:27017/NotificationService");
    const connect = await mongoose.connect(
      `mongodb://root:root123@${config.mongo.host}:${config.mongo.port}/`
    );
    // const connect = await mongoose.connect("mongodb://127.0.0.1:8010/NotificationService");
    console.log("Database connected: ", connect.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
