const providers = require("../modules/provider.modules");
const Provider = require("../db/db");
const { ObjectId } = require("mongodb");

function errorHandeler(res, err) {
  res.status(404);
  res.send(`Something went wrong ${err}`);
}

function isListEmpty(obj) {
  return !obj || obj.length == 0 || Object.keys.obj == 0;
}

function isValid(id) {
  return providers.find((provider) => provider.id == id);
}

function makeUniqueID() {
  const min = 100;
  const max = 999;
  do {
    var id = Math.floor(Math.random() * (max - min) + min);
  } while (isValid);
  return id;
}

module.exports.create = function (req, res) {
  try {
    var provider = req.body;
    Provider.create(provider)
      .then((result) => {
        res.status(201);
        res.send(result);
      })
      .catch((err) => errorHandeler(res, err));
  } catch (err) {
    errorHandeler(res, err);
  }
};

module.exports.readAll = function (req, res) {
  try {
    Provider.find()
      .then((result) => {
        if (isListEmpty(result)) {
          res.status(400);
          res.send("No data found");
        } else {
          res.status(200);
          res.send(result);
        }
      })
      .catch((err) => errorHandeler(res, err));
  } catch (err) {
    errorHandeler(res, err);
  }
};

module.exports.readOne = function (req, res) {
  try {
    let id = new ObjectId(req.params.id);
    Provider.find({ _id: id })
      .then((result) => {
        if (isListEmpty(result)) {
          res.status(400);
          res.send("No match found");
        } else {
          res.status(200);
          res.send(result);
        }
      })
      .catch((err) => errorHandeler(res, err));
  } catch (err) {
    errorHandeler(res, err);
  }
};

module.exports.update = function (req, res) {
  try {
    var provider = req.body;
    var id = new ObjectId(req.params.id);
    Provider.findOneAndUpdate({ _id: id }, provider, { new: true })
      .then((result) => {
        if (isListEmpty(result)) {
          res.status(400);
          res.send("Data is invalid");
        } else {
          res.status(201);
          res.send(result);
        }
      })
      .catch((err) => errorHandeler(res, err));
  } catch (err) {
    errorHandeler(res, err);
  }
};

module.exports.delete = function (req, res) {
  try {
    let id = new ObjectId(req.params.id);
    Provider.findOneAndDelete({ _id: id })
      .then((result) => {
        if (isListEmpty(result)) {
          res.status(400);
          res.send("Nothing to delete");
        } else {
          res.status(200);
          res.send(result);
        }
      })
      .catch((err) => errorHandeler(res, err));
  } catch (err) {
    errorHandeler(res, err);
  }
};

module.exports.deleteAll = function (req, res) {
  try {
    Provider.deleteMany({})
      .then((result) => {
        if (result.deletedCount === 0) {
          res.status(400);
          res.send("Nothing to delete");
        } else {
          res.status(200);
          res.send(`All providers have been deleted \n ${result}`);
        }
      })
      .catch((err) => errorHandeler(res, err));
  } catch (err) {
    errorHandeler(res, err);
  }
};
