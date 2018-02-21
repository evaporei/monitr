const express = require("express");
const router = express.Router();
const shell = require("shelljs");

router.get("/api/osquery/:select", async (req, res) => {
  shell.exec(`osqueryi --json "${req.params.select}"`, {
    silent: true
  }, (code, stdout, stderr) => res.status(201).send({output: JSON.parse(stdout)}));
});

router.get("/api/command/:command", async (req, res) => {
  const command = req.params.command.replace(new RegExp("/", "g"), '');
  shell.exec(`${command}`, {
    silent: true
  }, (code, stdout, stderr) => res.status(201).send({output: "Comando enviado"}));
});

module.exports = router;
