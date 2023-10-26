var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");
/* GET users listing. */
router.get("/getUser", userController.getAllUserData);
router.post("/create", userController.createUser);
router.get("/:id", userController.getUserById);
router.delete("/:id", userController.deleteUsers);

module.exports = router;
