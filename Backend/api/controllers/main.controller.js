const providers = require("../modules/provider.modules");

module.exports.create = function (req, res) {
  let min = 100;
  let max = 999;
  let id = Math.floor(Math.random() * (max - min) + min);

  let provider = {
    id: id,
    name: req.body.firstname,
    position: req.body.position,
    salary: req.body.salary,
    company: {
      name: req.body.company.company_name,
      email: req.body.company.email,
      address: req.body.company.address,
      description: req.body.company.description,
    },
  };
  providers.push(provider);
  res.status(200);
  res.send(provider);
};

module.exports.readAll = function (req, res) {
  res.status(200);
  res.send(provider);
};

module.exports.readOne = function (req, res) {
  let id = req.params.id;
  let provider = providers.find((provider) => (provider.id = id));
  res.status(200);
  res.send(provider);
};

module.exports.update = function (req, res) {
  let id = req.params.id;
  let provider = providers.find((provider) => provider.id == id);
  provider.name = req.body.firstname;
  provider.position = req.body.position;
  provider.company.name = req.body.company.company_name;
  provider.company.email = req.body.company.email;
  provider.company.address = req.body.company.address;
  provider.company.description = req.body.company.description;
  res.status(200);
  res.send(provider);
};

module.exports.delete = function (req, res) {
  let id = req.params.id;
  let provider = providers.find((provider) => provider.id == id);
  res.status(200);
  res.send(provider);
  let index = providers.indexOf(provider);
  providers.splice(index, 1);
};

module.exports.deleteAll = function (req, res) {};
