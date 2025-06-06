const cartService = require("../services/cart.service.js");
const Cart = require("../models/cart.model.js");

const findUserCart = async (req, res) => {
  console.log("🛒 Entered findUserCart");
  const user = req.user; // <-- important!
  console.log("👤 User from req:", user);
  try {
    const cart = await cartService.findUserCart(user._id); // Pass user._id to service
    console.log("📦 Fetched Cart:", cart);
    return res.status(200).send(cart);
  } catch (error) {
    console.error("❌ Error in findUserCart:", error.message);
    return res.status(500).send({ error: error.message });
  }
};

// const findUserCart = async (req, res) => {
//   console.log("🛒 Entered findUserCart");
//   const userId = req.user._id; // get only user ID
//   console.log("👤 User from req:", user);
//   try {
//     const cart = await cartService.findUserCart(userId);
//     console.log("📦 Fetched Cart:", cart);
//     return res.status(200).send(cart);
//   } catch (error) {
//     console.error("❌ Error in findUserCart:", error.message);
//     return res.status(500).send({ error: error.message });
//   }
// };

// const findUserCart = async (userId) => {
//   try {
//     const cart = await Cart.findOne({ user: userId }).populate("items.product");
//     if (!cart) {
//       throw new Error("Cart not found");
//     }
//     return cart;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

const addItemToCart = async (req, res) => {
  const user = req.user;
  try {
    const cartItem = await cartService.addCartItem(user._id, req.body);
    return res.status(200).send(cartItem);
  } catch (error) {
    console.error("❌ Error in addItemToCart:", error);
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  findUserCart,
  addItemToCart,
};

// const cartService = require("../services/cart.service.js");

// const findUserCart = async (req, res) => {
//   const user = req.user;
//   try {
//     const cart = await cartService.findUserCart(user._id);
//     return res.status(200).send(cart);
//   } catch (error) {
//     return res.status(500).send({ error: error.message });
//   }
// };

// const addItemToCart = async (req, res) => {
//   const user = req.user;
//   try {
//     const { productId, quantity } = req.body;
//     const cartItem = await cartService.addToCart(user._id, productId, quantity); // ✅ Use correct method
//     return res.status(200).send(cartItem);
//   } catch (error) {
//     return res.status(500).send({ error: error.message });
//   }
// };

// module.exports = {
//   findUserCart,
//   addItemToCart,
// };
