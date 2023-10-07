var express = require("express");
var router = express.Router();
const mainController = require("../controllers/main.controller.js");

function notFound(req, res) {
  res.status(400);
  res.send("Not found");
}

router.post("/provider", mainController.create);

router.get("/provider", mainController.readAll);

router.get("/provider/:id", mainController.readOne);

router.put("/provider/:id", mainController.update);

router.delete("/provider/:id", mainController.delete);

router.delete("/provider", mainController.deleteAll);

router.get("/*", notFound);

router.post("/*", notFound);

router.put("/*", notFound);

router.delete("/*", notFound);

module.exports = router;
