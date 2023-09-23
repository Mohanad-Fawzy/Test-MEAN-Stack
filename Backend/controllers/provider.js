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
