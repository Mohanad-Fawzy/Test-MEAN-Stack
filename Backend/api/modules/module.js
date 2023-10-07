const mongoose = require("mongoose");

const { providerSchema } = require("../schema/providers.schema");

const Provider = mongoose.model("providers", providerSchema);

module.exports = { Provider };
