const Address = require("../models/address.model.js");
const cartService = require("../services/cart.service.js");
const Order = require("../models/order.model.js");
const OrderItem = require("../models/orderItem.model.js");

async function createOrder(user, shipAddress) {
  let address;
  if (shipAddress._id) {
    let existAddress = await Address.findById(shipAddress._id);
    address = existAddress;
  } else {
    address = new Address(shipAddress);
    address.user = user;
    await address.save();

    if (!user.addresses) {
      user.addresses = []; // ✅ Fix: ensure it's an array
    }

    user.addresses.push(address);
    await user.save();
  }
  const cart = await cartService.findUserCart(user._id);
  const orderItems = [];

  for (const item of cart.cartItems) {
    const orderItem = new OrderItem({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });
    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem);
  }
  const createdOrder = new Order({
    user,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discounte: cart.discounte,
    totalItem: cart.totalItem,
    shipAddress: address,
  });
  const savedOrder = await createdOrder.save();
  return savedOrder;
}
async function placeOrder(orderId) {
  const order = await fidnOrderById(orderId);
  order.orderStatus = "PLACED";
  order.paymentDetails.ststus = "COMPLETED";

  return await order.save();
}
async function confirmedOrder(orderId) {
  const order = await fidnOrderById(orderId);

  order.orderStatus = "CONFIRMED";

  return await order.save();
}

async function shipOrder(orderId) {
  const order = await fidnOrderById(orderId);

  order.orderStatus = "SHIPPED";

  return await order.save();
}
async function deliverOrder(orderId) {
  const order = await fidnOrderById(orderId);

  order.orderStatus = "Delivered";

  return await order.save();
}
async function cancelledOrder(orderId) {
  const order = await fidnOrderById(orderId);

  order.orderStatus = "CANCELLED";

  return await order.save();
}
async function fidnOrderById(orderId) {
  const order = await Order.findById(orderId)

    .populate("user")

    .populate({ path: "orderItems", populate: { path: "product" } })

    .populate("shippingAddress");

  return order;

  I;
}
async function usersOrderHistory(userId) {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })

      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();

    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllOrders() {
  return await Order.find()

    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
}

async function deleteOrder(orderId) {
  const order = await fidnOrderById(orderId);

  await Order.findByIdAndDelete(order._id);
}

module.exports = {
  createOrder,
  placeOrder,
  confirmedOrder,
  shipOrder,
  deliverOrder,
  cancelledOrder,
  fidnOrderById,
  usersOrderHistory,
  getAllOrders,
  deleteOrder,
};
