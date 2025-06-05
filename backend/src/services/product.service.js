const Category = require("../models/category.model");
const Product = require("../models/product.model");
async function createProduct(reqData) {
  let toplevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!toplevel) {
    toplevel = new Category({
      name: reqData.topLevelCategory,
      lavel: 1,
    });
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: toplevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentCategory: toplevel._id,
      lavel: 2,
    });
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLevel._id,
  });

  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLevel._id,
      lavel: 3,
    });
  }

  const product = new Product({
    title: reqData.title,
    color: reqData.color,
    description: reqData.description,
    discountedPrice: reqData.discountedPrice,
    discountePersent: reqData.discountePersent,
    imageUrl: reqData.imageUrl,
    brand: reqData.brand,
    price: reqData.price,
    size: reqData.size,
    quantity: reqData.quantity,
    category: thirdLevel._id,
  });

  return product.save();
}

async function deleteProduct(productId) {
  const product = await findProductById(productId);
  await Product.findByIdAndDelete(productId);
  return "Product Deleted Successfully";
}

async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(Id) {
  const product = await Product.findById(Id).populate("category").exec();
  if (!product) {
    throw new Error("Product not found with Id : ", Id);
  }
  return product;
}
async function getAllProducts(reqQuery) {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;
  pageSize = pageSize || 10;
  let query = Product.find().populate("category");
  if (category) {
    const existCategory = await Category.findOne({ name: category });
    if (existCategory) {
      query = query.where("category").equals(existCategory._id);
    } else {
      return { content: [], currentPage: 1, totalPage: 0 };
    }
  }
  if (color) {
    const colorSet = new Set(
      color.split(",").map((color) => color.trim().toLowerCase())
    );
    const colorRegex =
      colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
    query = query.where("color").regex(colorRegex);
  }
  if (sizes) {
    const sizesSet = new Set(sizes);
    query = query.where("size.name").in([...sizesSet]);
  }
  if (minPrice && maxPrice) {
    query = await query.where("discountedPrice").gte(minPrice).lte(maxPrice);
  }
  if (minDiscount) {
    query = await query.where("discountPersent").gt(minDiscount);
  }
  if (stock) {
    if (stock == "in_stock") {
      query = query.where("quantity").gt(0);
    } else if (stock == "out_of_stock") {
      query = query.where("quantity").gt(1);
    }
  }
  if (sort) {
    const sortDirection = sort === "price_height" ? -1 : 1;
    query = query.sort({ discountedPrice: sortDirection });
  }
  const totalProducts = await Product.countDocuments(query);
  const skip = (pageNumber - 1) * pageSize;
  query = query.skip(skip).limit(pageSize);
  const products = await query.exec();
  const totalPages = Math.ceil(totalProducts / pageSize);
  return { content: products, currentPage: pageNumber, totalPages };
}

async function createMultipleProduct(products) {
  for (let product of products) {
    await createProduct(product);
  }
}

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  findProductById,
  getAllProducts,
  createMultipleProduct,
};
