var express = require("express");
var router = express.Router();
const mainController = require("../controllers/main.controller.js");

router.post("/provider", mainController.create);

router.get("/provider", mainController.readAll);

router.get("/provider/:id", mainController.readOne);

router.put("/provider/:id", mainController.update);

router.delete("/provider/:id", mainController.delete);

router.delete("/provider/:id", mainController.deleteAll);

module.exports = router;
