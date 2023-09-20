const { error } = require("console");
const http = require("http");

const data = JSON.stringify({
  title: "ZPY",
});

const Options = {
  hostname: "localhost",
  port: 3000,
  method: "GET",
  path: "/",
  headers: {
    "Content-type": "application/json",
    "Content-length": data.length,
  },
};

const req = http.request(Options, (res) => {
  res.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
});

req.on("error", (error) => {
  process.stdout.write(error);
});

req.end();
