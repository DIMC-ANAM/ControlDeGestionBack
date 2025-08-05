const { Router } = require("express");
const router = Router();
const controller = require("./turnadoController");
const token = require("../token/tokenController");


router.post("/consultarTurnados", token.validateToken, controller.consultarTurnados);


module.exports = router;

