const providers = require("../modules/providers");

module.exports.list = function (req, res) {
  res.render("provider-list", { providers: providers });
};
