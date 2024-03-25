const {
  postFavoriteController,
  deleteFavoriteController,
} = require("../controllers/favoritesController");

const postFavoriteHandler = async (req, res) => {
  const favoriteData = req.body;
  try {
    const allFavs = await postFavoriteController(favoriteData);

    res.status(201).json(allFavs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFavoriteHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const allFavorites = await deleteFavoriteController(id);

    res.status(200).json(allFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postFavoriteHandler, deleteFavoriteHandler };
