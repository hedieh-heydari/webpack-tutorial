const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.get("/hello-world/", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/hello-world.html");
  const contentFormatFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFormatFile);
});

app.get("/images/", function (req, res) {
  const pathToHtmlFile = path.resolve(
    __dirname,
    "../dist/image-component.html"
  );
  const contentFormatFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFormatFile);
});

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.listen(2500, function () {
  console.log("app is running on port 2500");
});
