const { app } = require("./src/app");
const colors = require("colors");
const { SERVICE_PORT } = require("./src/config");
colors.enable();
const server = app.listen(SERVICE_PORT, () => {
  console.log(
    colors.green("INFO:    "),
    `Application listening on ${SERVICE_PORT}`
  );
});

process.on("SIGINT", () => {
  console.log(colors.green("INFO:    "), `Application stopped`);
  server.close();
  process.exit(0);
});
