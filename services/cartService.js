const Cart = require("../model/defination/carts/cart");
const CartProduct = require("../model/defination/junctionTable/cartProduct");

module.exports = {
  getAllCartData: async () => {
    const data = await Cart.find().populate("product");
    console.log(data);
    return data;
  },

  createCart: (cartData) => {
    return Cart.create(cartData);
  },

  deleteCart: (cartId) => {
    return Cart.findByIdAndRemove(cartId);
  },

  updateCart: (cartId, updatedCartData) => {
    return Cart.findByIdAndUpdate(cartId, updatedCartData, { new: true });
  },

  // Add products to a cart
  addProductsToCart: async (cartId, productIds) => {
    const cart = await Cart.findById(cartId);
    if (!cart) {
      throw new Error("Cart not found");
    }

    // Create CartProduct entries to associate products with the cart
    const cartProducts = productIds.map((productId) => ({
      cart: cartId,
      product: productId,
      quantity: 1, // You can set the quantity as needed
    }));

    const addedProducts = await CartProduct.insertMany(cartProducts);

    // Update the cart's products array
    if (cart.product) {
      cart.product = cart.product.concat(addedProducts.map((cp) => cp._id));
    } else {
      cart.product = addedProducts.map((cp) => cp._id);
    }
    console.log(cart);
    await cart.save();

    return addedProducts;
  },
};

// const Cart = require("../model/defination/carts/cart"); // Import your Cart model

// const junction = require("../model/defination/junctionTable/cartProduct");
// module.exports = {
//   getAllCartData: () => {
//     return Cart.find().populate("products");
//   },

//   createCart: (cartData) => {
//     return junction.create(cartData);
//   },
//   addItems: () => {},

//   deleteCart: (cartId) => {
//     return junction.findByIdAndRemove(cartId);
//   },

//   updateCart: (cartId, updatedCartData) => {
//     console.log(cartId + updatedCartData);
//     return junction.findByIdAndUpdate(cartId, updatedCartData, { new: true });
//   },
// };
