const userService = require("../services/user.service.js");

const getUserProfile = async (req, res) => {
  try {
    // const user = req.user;
    console.log("🔑 Authorization Header:", req.headers.authorization);
    const jwt = req.headers.authorization?.split(" ")[1];
    if (!jwt) {
      console.log("🚫 Token not found");
      return res.status(404).send({ error: "token not found" });
    }
    const user = await userService.getUserProfileByToken(jwt);
    console.log("👤 User from token:", user);
    return res.status(200).send(user);
  } catch (error) {
    console.error("❌ Error in getUserProfile:", error);
    return res.status(500).send({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { getUserProfile, getAllUsers };
