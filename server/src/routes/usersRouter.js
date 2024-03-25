const { Router } = require("express");
const {
  registerUserHandler,
  loginUserHandler,
} = require("../handlers/usersHandler");

const userRouter = Router();

userRouter.post("/register", registerUserHandler);
userRouter.get("/login", loginUserHandler);

module.exports = userRouter;
