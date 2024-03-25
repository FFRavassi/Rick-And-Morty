const axios = require("axios");
const URL = process.env.URL;

const getCharacterController = async (id) => {
  const { data } = await axios.get(`${URL}${id}`);

  if (data) {
    let detail = {
      id: data.id,
      name: data.name,
      status: data.gender,
      species: data.species,
      gender: data.species,
      origin: data.origin,
      image: data.image,
    };
    return detail;
  }
};

module.exports = getCharacterController;
