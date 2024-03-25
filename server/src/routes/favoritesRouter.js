const { Router } = require("express");
const {
  postFavoriteHandler,
  deleteFavoriteHandler,
} = require("../handlers/favoritesHandler");

const favoritesRouter = Router();

favoritesRouter.post("/", postFavoriteHandler);
favoritesRouter.delete("/:id", deleteFavoriteHandler);

module.exports = favoritesRouter;
