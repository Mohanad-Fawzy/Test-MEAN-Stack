var express = require("express");
var router = express.Router();
const providerController = require("../controllers/provider");

router.get("/", providerController.list);

router.get("/details/:id", providerController.details);

router.get("/edit/:id", providerController.edit);

router.post("/update/:id", providerController.update);

module.exports = router;
