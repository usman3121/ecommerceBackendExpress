var express = require("express");
var router = express.Router();
const productController = require("../controllers/productController");
/* GET users listing. */
router.get("/getproducts", productController.getAllProducts);
router.post("/create", productController.createProduct);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.deleteProduct);
router.post("/:id", productController.updateProduct);

module.exports = router;
