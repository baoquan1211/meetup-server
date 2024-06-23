const { server, io } = require("./src/app");
const { SERVICE_PORT } = require("./src/settings");

server.listen(SERVICE_PORT, () => {
  console.info(`Application listening on ${SERVICE_PORT}`);
});

process.on("SIGINT", () => {
  console.info("Application stopped");
  server.close();
  process.exit(0);
});
