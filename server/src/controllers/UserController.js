const { User } = require("../DB_Connection");

const postUserController = async (userData) => {
  const { email, password } = userData;

  if (!email || !password) {
    throw Error("Please complete the required fields");
  }

  const [user, created] = await User.findOrCreate({
    where: { email: email },
    defaults: { password: password },
  });

  if (!created) throw Error("User already registered");

  return user;
};

module.exports = { postUserController };
