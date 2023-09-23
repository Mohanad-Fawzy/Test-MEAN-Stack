const providers = require("../modules/providers");

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
