const providers = require("../modules/providers");

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

module.exports.list = function (req, res) {
  res.render("provider-list", { title: "Services", providers: providers });
};

module.exports.details = function (req, res) {
  let id = req.params.id;
  let provider = providers.find((provider) => provider.id == id);
  res.render("provider-details", {
    id: id,
    title: `${provider.company.name} details`,
    providers: provider,
    company: provider.company,
  });
};

module.exports.edit = function (req, res) {
  let id = req.params.id;
  let provider = providers.find((provider) => provider.id == id);
  res.render("provider-edit", {
    id: id,
    title: `${provider.company.name} edit`,
    providers: provider,
    company: provider.company,
  });
};

module.exports.update = function (req, res) {
  let id = req.params.id;
  let provider = providers.find((provider) => provider.id == id);
  provider.name = req.body.firstname;
  provider.position = req.body.position;
  provider.company.name = req.body.company_name;
  provider.company.email = req.body.email;
  provider.company.address = req.body.address;
  provider.company.description = req.body.description;
  res.render("provider-update", {
    id: id,
    title: `${provider.company.name} update`,
  });
};

module.exports.addForm = function (req, res) {
  res.render("provider-add-form", { title: "Add new provider" });
};

module.exports.add = function (req, res) {
  let provider = {
    id: makeUniqueID(),
    name: req.body.firstname,
    position: req.body.position,
    salary: req.body.salary,
    company: {
      name: req.body.company_name,
      email: req.body.email,
      address: req.body.address,
      description: req.body.description,
    },
  };
  providers.push(provider);
  res.render("provider-update", { title: "Added" });
};

module.exports.delete = function (req, res) {
  let name = req.params.name;
  let provider = providers.find((provider) => provider.name == name);
  res.render("provider-delete", {
    title: "deleted",
    company: provider.company,
  });
  let index = providers.indexOf(provider);
  providers.splice(index, 1);
};
