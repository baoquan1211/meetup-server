const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const clientRedis = require("./databases/redis");
const run = require("./helper/kafka_consumer");
// App
const app = express();

const allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  next();
};

app.use(allowCrossDomain);
// Middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
// Database
require("./databases/mongo");
clientRedis.connect();
// KafkaConsumer
// run().catch(console.error);
// Router
app.use("/api/v1", require("./router"));
// Handle error
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  const statusError = err.status || 500;
  const messageError = err.message || "Internal Server Error";
  return res.status(statusError).json({
    status: "error",
    message: messageError,
  });
});

// Export
module.exports = app;
