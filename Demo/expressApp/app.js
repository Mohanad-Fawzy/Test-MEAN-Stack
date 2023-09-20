const express = require("express");
const fs = require("fs");
const dir = "./views/";
const port = process.env.port | 3000;

const app = express();

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
