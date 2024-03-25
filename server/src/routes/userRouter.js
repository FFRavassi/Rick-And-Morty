const { Router } = require("express");
const { postUserHandler } = require("../handlers/UserHandler");

const userRouter = Router();

userRouter.post("/register", postUserHandler);

module.exports = userRouter;
