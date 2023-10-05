const mongoose = require("mongoose");

const { provider } = require("../modules/module");

const uri = "mongodb://127.0.0.1:27017/providers";

const c1 = mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

module.exports = provider;
