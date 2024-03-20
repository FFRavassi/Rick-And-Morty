const { postUserController } = require("../controllers/UserController");

const postUserHandler = async (req, res) => {
  const userData = req.body;
  try {
    const createdUser = await postUserController(userData);

    res.status(200).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postUserHandler,
};
