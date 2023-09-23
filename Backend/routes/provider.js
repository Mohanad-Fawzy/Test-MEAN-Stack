var express = require("express");
var router = express.Router();
const providerController = require("../controllers/provider");

router.get("/", providerController.list);

module.exports = router;