const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from DevOps Project 1 — Deployed on AWS!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


