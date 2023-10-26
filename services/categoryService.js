const Category = require("../model/defination/categories/category");
const Product = require("../model/defination/products/product");

module.exports = {
  createCategory: async (categoryData) => {
    const category = new Category(categoryData);
    return await category.save();
  },
  createProductInCategory: async (categoryId, productData) => {
    const category = await Category.findById(categoryId);
    if (!category) {
      throw new Error("Category not found");
    }

    const product = new Product({
      ...productData,
      category: category._id,
    });

    try {
      const savedProduct = await product.save();
      return savedProduct;
    } catch (error) {
      console.log(error); // Log the specific error
      throw error;
    }
  },

  getAllCategories: async () => {
    return await Category.find();
  },

  getCategoryById: async (categoryId) => {
    return await Category.findById(categoryId);
  },

  updateCategory: async (categoryId, categoryData) => {
    return await Category.findByIdAndUpdate(categoryId, categoryData, {
      new: true,
    });
  },

  deleteCategory: async (categoryId) => {
    return await Category.findByIdAndRemove(categoryId);
  },
};
