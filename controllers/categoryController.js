const categoryService = require("../services/categoryService");

module.exports = {
  createCategory: async (req, res) => {
    const categoryData = req.body; // Assuming category data is sent in the request body
    try {
      const createdCategory = await categoryService.createCategory(
        categoryData
      );
      res.status(201).json({
        message: "Category created successfully",
        category: createdCategory,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating category", error: error.message });
    }
  },

  getAllCategories: async (req, res) => {
    try {
      const categories = await categoryService.getAllCategories();
      res.status(200).json({ categories });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching categories", error: error.message });
    }
  },
  createProductInCategory: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const productData = req.body; // Product data to be inserted
      const savedProduct = await categoryService.createProductInCategory(
        categoryId,
        productData
      );
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(500).json({ error: "Error creating product in category" });
    }
  },

  getCategoryById: async (req, res) => {
    const categoryId = req.params.id; // Assuming the category ID is passed in the request parameters
    try {
      const category = await categoryService.getCategoryById(categoryId);
      if (category) {
        res.status(200).json({ category });
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching category", error: error.message });
    }
  },

  updateCategory: async (req, res) => {
    const categoryId = req.params.id; // Assuming the category ID is passed in the request parameters
    const categoryData = req.body; // Assuming updated category data is sent in the request body
    try {
      const updatedCategory = await categoryService.updateCategory(
        categoryId,
        categoryData
      );
      res.status(200).json({
        message: "Category updated successfully",
        category: updatedCategory,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating category", error: error.message });
    }
  },

  deleteCategory: async (req, res) => {
    const categoryId = req.params.id; // Assuming the category ID is passed in the request parameters
    try {
      const deletedCategory = await categoryService.deleteCategory(categoryId);
      if (deletedCategory) {
        res.status(200).json({
          message: "Category deleted successfully",
          category: deletedCategory,
        });
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting category", error: error.message });
    }
  },
};
