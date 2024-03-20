const { Router } = require("express");
const userRouter = require("./userRouter");

const router = Router();

router.use("/landing", userRouter);

module.exports = router;
