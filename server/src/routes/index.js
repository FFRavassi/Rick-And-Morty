const { Router } = require("express");
const userRouter = require("./usersRouter");
const favoritesRouter = require("./favoritesRouter");
const charactersRouter = require("./charactersRouter");

const router = Router();

router.use("/landing", userRouter);
router.use("/favorites", favoritesRouter);
router.use("/character", charactersRouter);

module.exports = router;
