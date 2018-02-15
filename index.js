const express = require("express");
const cors = require("cors");
const app = express();

const controllers = require("./controllers");

app.use(cors());
app.use(controllers);

app.listen(3001, () => {
  console.log("App running on 3001");
});

module.exports = app;
