const {
  registerUserController,
  loginUserController,
} = require("../controllers/usersController");

const registerUserHandler = async (req, res) => {
  const userData = req.body;
  try {
    const createdUser = await registerUserController(userData);

    res.status(201).json(createdUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUserHandler = async (req, res) => {
  const userInfo = req.body;
  try {
    const logedUser = await loginUserController(userInfo);

    res.status(200).json(logedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  registerUserHandler,
  loginUserHandler,
};
