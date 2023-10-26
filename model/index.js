let sequilize = require("sequelize");
let cart = require("./defination/carts/cart");
let category = require("./defination/categories/category");
let product = require("./defination/products/product");
let user = require("./defination/users/user");

user.hasOne(cart, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
cart.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
//catrgory many to many with products
category.belongsToMany(product, { through: productTables });
product.belongsToMany(category, { through: productTables });
//

product.belongsToMany(cart, { through: productCarts });
cart.belongsToMany(product, { through: productCarts });
