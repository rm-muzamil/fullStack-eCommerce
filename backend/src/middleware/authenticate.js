const jwtProvider = require("../config/jwtProvider.js");
const userService = require("../services/user.service.js");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Token missing" });
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = await userService.findUserById(userId);
    if (!user) {
      return res.status(404).send({ error: "user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = authenticate;
