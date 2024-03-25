const { Router } = require("express");
const getCharacterHandler = require("../handlers/charactersHandler");

const charactersRouter = Router();

charactersRouter.get("/:id", getCharacterHandler);

module.exports = charactersRouter;
