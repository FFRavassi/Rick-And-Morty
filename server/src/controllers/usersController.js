const { User, Favorite } = require("../DB_Connection");

const registerUserController = async (userData) => {
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

const loginUserController = async (userInfo) => {
  const { email, password } = userInfo;

  if (!email || !password) {
    throw Error("Please complete the required fields");
  }

  const loggeduser = await User.findOne({
    where: { email },
    include: { model: Favorite },
  });

  if (!loggeduser || loggeduser.password !== password) {
    throw Error("Email or password are incorrect");
  }

  return loggeduser;
};

module.exports = { registerUserController, loginUserController };
