const Cart = require("../models/cart.model");
const CartItem = require("../models/cartItem.model");
const Product = require("../models/product.model");

async function createCart(user) {
  try {
    const cart = new Cart({ user });
    const createdCart = await cart.save();
    return createCart;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findUserCart(userId) {
  try {
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return null; // or return an empty cart or throw an error as per your design
    }
    let cartItems = await CartItem.find({ cart: cart._id }).populate("product");
    cart.cartItems = cartItems;

    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalItem = 0;

    for (let cartItem of cart.cartItems) {
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      totalItem += cartItem.quantity;
    }
    cart.totalPrice = totalPrice;
    cart.totalUtem = totalItem;
    cart.discounte = totalPrice - totalDiscountedPrice;

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function addCartItem(userId, req) {
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId });
      cart = await cart.save();
    }
    const product = await Product.findById(req.productId);
    if (!product) {
      throw new Error("Product not found");
    }
    const isPresent = await CartItem.findOne({
      cart: cart._id,
      product: product._id,
      userId,
    });

    if (!isPresent) {
      const cartItem = new CartItem({
        product: product._id,
        cart: cart._id,
        quantity: 1,
        userId,
        price: product.price,
        size: req.size,
        discountedPrice: product.discountedPrice,
      });
      const createsCartItem = await cartItem.save();
      cart.cartItems.push(createsCartItem);
      await cart.save();
      return "Item added to Cart";
    } else {
      return "Item already exists in cart";
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = { createCart, findUserCart, addCartItem };
