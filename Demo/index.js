//! Dependencies -------

const http = require("http");

//!----------------------

//? Start server --------

const server = http
  .createServer((req, res) => {
    res.writeHead(200, "Content-type", "text/html");
    switch (req.url) {
      case "/get":
        res.write("<h1>GET<h1> <h2> zpy <h2>");
        if (req.method == "GET") {
          res.end("<h1>GET<h1> <h2> zpy <h2>");
        }
        break;

      case "/post":
        res.write("<h1>POST<h1> <h2> zpy <h2>");
        if (req.method == "POST") {
          res.end("<h1>POST<h1> <h2> zpy <h2>");
        }
        break;

      case "/put":
        res.write("<h1>PUT<h1> <h2> zpy <h2>");
        if (req.method == "PUT") {
          res.end("<h1>PUT<h1> <h2> zpy <h2>");
        }
        break;

      default:
        res.end("<h1> Error 404 <h1>");
        break;
    }
    res.end();
  })
  .listen(3000, () => {
    console.log("Server is on !");
  });
