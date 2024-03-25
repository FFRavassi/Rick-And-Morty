const { Favorite } = require("../DB_Connection");

const postFavoriteController = async (favoriteData) => {
  const { id, name, origin, status, image, species, gender } = favoriteData;

  if ((!id || !name || !origin, !status, !image, !species, !gender)) {
    throw Error("Mising data");
  }

  const [favorite, created] = await Favorite.findOrCreate({
    where: { id, name, origin, status, image, species, gender },
  });

  if (!created) throw Error("Character already selected");

  const allFavs = await Favorite.findAll();

  return allFavs;
};

const deleteFavoriteController = async (id) => {
  await Favorite.destroy({ where: { id } });

  const allFavorites = await Favorite.findAll();

  return allFavorites;
};

module.exports = { postFavoriteController, deleteFavoriteController };
