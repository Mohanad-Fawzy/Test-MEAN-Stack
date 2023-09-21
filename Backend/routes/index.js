var express = require("express");
var router = express.Router();
const mainController = require("../controllers/main");

/* GET home page. */
router.get("/", mainController.home);

module.exports = router;
