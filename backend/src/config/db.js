const mongoose = require("mongoose");
const MONGO_db =
  "mongodb+srv://lootmall:lootMalleCommerce@ecommerce.ilff0cm.mongodb.net/?retryWrites=true&w=majority&appName=eCommerce";

const connectDb = () => {
  return mongoose.connect(MONGO_db);
};

module.exports = { connectDb };
