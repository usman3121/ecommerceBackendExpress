const Product = require("../model/defination/products/product");

module.exports = {
  createProduct: async (productData) => {
    const product = new Product(productData);
    return await product.save();
  },

  getAllProducts: async () => {
    return await Product.find();
  },

  getProductById: async (productId) => {
    console.log(productId);
    return await Product.findById(productId);
  },

  updateProduct: async (productId, productData) => {
    return await Product.findByIdAndUpdate(productId, productData, {
      new: true,
    });
  },

  deleteProduct: async (productId) => {
    return await Product.findByIdAndRemove(productId);
  },
};
