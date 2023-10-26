const productService = require("../services/productService");

module.exports = {
  createProduct: async (req, res) => {
    const productData = req.body; // Assuming product data is sent in the request body
    try {
      const createdProduct = await productService.createProduct(productData);
      res.status(201).json({
        message: "Product created successfully",
        product: createdProduct,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating product", error: error.message });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json({ products });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching products", error: error.message });
    }
  },

  getProductById: async (req, res) => {
    const productId = req.params.id; // Assuming the product ID is passed in the request parameters
    try {
      const product = await productService.getProductById(productId);
      console.log(product);
      if (product) {
        res.status(200).json({ product });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching product", error: error.message });
    }
  },

  updateProduct: async (req, res) => {
    const productId = req.params.id; // Assuming the product ID is passed in the request parameters
    const productData = req.body; // Assuming updated product data is sent in the request body
    try {
      const updatedProduct = await productService.updateProduct(
        productId,
        productData
      );
      res.status(200).json({
        message: "Product updated successfully",
        product: updatedProduct,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating product", error: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    const productId = req.params.id; // Assuming the product ID is passed in the request parameters
    try {
      const deletedProduct = await productService.deleteProduct(productId);
      if (deletedProduct) {
        res.status(200).json({
          message: "Product deleted successfully",
          product: deletedProduct,
        });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting product", error: error.message });
    }
  },
};
