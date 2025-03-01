const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.get("/", function (req, res) {
  const pathToHtmlFile = path.resolve(
    __dirname,
    "../dist/image-component.html"
  );
  const contentFormatFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFormatFile);
});

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.listen(9002, function () {
  console.log("application is running on http://localhost:9002");
});
