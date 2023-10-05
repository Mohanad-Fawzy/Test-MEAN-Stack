const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
});

const providerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: String, required: true },
  company: { companySchema },
});

module.exports = { providerSchema, companySchema };
