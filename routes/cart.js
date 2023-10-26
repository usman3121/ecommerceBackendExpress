var express = require("express");
var router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/getCart", cartController.getAllCartData);
router.post("/createCart", cartController.createCart);
router.post(
  "/createCart/:cartId/:productIds",
  cartController.addProductsToCart
);
router.get("/:id", cartController.updateCart);
router.delete("/:id", cartController.deleteCart);

module.exports = router;
