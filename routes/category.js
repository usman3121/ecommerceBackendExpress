var express = require("express");
var router = express.Router();
const categoryController = require("../controllers/categoryController.js");

router.get("/getCategory", categoryController.getAllCategories);
router.post("/createCategory", categoryController.createCategory);
router.get("/:id", categoryController.getCategoryById);
router.delete("/:id", categoryController.deleteCategory);
router.post("/:id", categoryController.updateCategory);
router.post("/createCategory/:id", categoryController.createProductInCategory);

module.exports = router;
