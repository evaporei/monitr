const express = require("express");
const router = express.Router();
const shell = require("shelljs");

router.get("/api/osquery/:select", async (req, res) => {
  shell.exec(`osqueryi --json "${req.params.select}"`, {
    silent: true
  }, (code, stdout, stderr) => res.status(201).send({output: JSON.parse(stdout)}));
});

module.exports = router;
