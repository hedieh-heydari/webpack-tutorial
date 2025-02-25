const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.get("/", function (req, res) {
  //   res.send("some dummy content");
  const pathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
  const contentFormatFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFormatFile);
});

app.listen(2500, function () {
  console.log("app is running on port 2500");
});
