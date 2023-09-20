const express = require("express");
const fs = require("fs");
const dir = "./views/";
const port = process.env.port | 3000;

const app = express();

//^ router

app.get("/", (req, res) => {
  render(res, "index.html");
});

app.get("/about", (req, res) => {
  render(res, "about.html");
});

app.get("/content", (req, res) => {
  render(res, "content.html");
});

//! listen

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

//? render the ui

const render = (res, file) => {
  fs.readFile(dir + file, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h1> Error 404 <h1>");
    }
    res.writeHead(200, { "Content-type": "text/html" });
    return res.end(data);
  });
};
