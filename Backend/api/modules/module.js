const mongoose = require("mongoose");

const { providerSchema } = require("../schema/providers.schema");

const provider = mongoose.model("providers", providerSchema);

module.exports = { providerSchema };
