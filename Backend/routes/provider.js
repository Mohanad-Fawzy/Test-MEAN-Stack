var express = require("express");
var router = express.Router();
const providerController = require("../controllers/provider");

router.get("/", providerController.list);

router.get("/details/:id", providerController.details);

router.get("/edit/:id", providerController.edit);

router.post("/update/:id", providerController.update);

router.get("/add-form", providerController.addForm);

router.post("/add", providerController.add);

router.get("/delete/:name", providerController.delete);

module.exports = router;
