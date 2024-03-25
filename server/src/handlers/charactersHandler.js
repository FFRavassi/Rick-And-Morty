const getCharacterController = require("../controllers/charactersController");

const getCharacterHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const detail = await getCharacterController(id);

    if (detail) {
      res.status(200).json(detail);
    } else {
      res.status(404).json({ message: "Character ID incorrect" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCharacterHandler;
