const http = require("http");
const fs = require("fs");
const dir = "./views/";
const port = process.env.port | 3000;

const server = http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        render(res, "index.html");
        break;
      case "/about":
        render(res, "about.html");
        break;
      case "/content":
        render(res, "content.html");
        break;
      default:
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1> Error 404 <h1>");
        break;
    }
  })
  .listen(port, () => {
    console.log(`http://localhost:${port}`);
  });

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
