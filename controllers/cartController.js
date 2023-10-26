const cartService = require("../services/cartService");

module.exports = {
  getAllCartData: async (req, res) => {
    try {
      const data = await cartService.getAllCartData();
      res.send(data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching cart data" });
    }
  },

  createCart: async (req, res) => {
    try {
      const newCart = await cartService.createCart(req.body);
      res.status(201).json(newCart);
    } catch (error) {
      res.status(500).json({ error: "Error creating cart" });
    }
  },

  deleteCart: async (req, res) => {
    try {
      const cartId = req.params.id;
      const deletedCart = await cartService.deleteCart(cartId);
      if (!deletedCart) {
        return res.status(404).json({ error: "Cart not found" });
      }
      res.json(deletedCart);
    } catch (error) {
      res.status(500).json({ error: "Error deleting cart" });
    }
  },

  updateCart: async (req, res) => {
    try {
      const cartId = req.params.id;
      const updatedCart = await cartService.updateCart(cartId, req.body);
      if (!updatedCart) {
        return res.status(404).json({ error: "Cart not found" });
      }
      res.json(updatedCart);
    } catch (error) {
      res.status(500).json({ error: "Error updating cart" });
    }
  },

  // Add products to a cart
  addProductsToCart: async (req, res) => {
    try {
      const cartId = req.params.cartId;
      const productIds = [req.body.productIds]; // An array of product IDs to add to the cart
      const addedProducts = await cartService.addProductsToCart(
        cartId,
        productIds
      );
      res.status(201).json(addedProducts);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Error adding products to cart" });
    }
  },
};

// const cartService = require("../services/cartService");

// module.exports = {
//   getAllCartData: async (req, res) => {
//     try {
//       const data = await cartService.getAllCartData();
//       res.send(data);
//     } catch (error) {
//       res.status(500).json({ error: "Error fetching cart data" });
//     }
//   },

//   addItems:async(req,res)=>{

//   },
//   createCart: async (req, res) => {
//     try {
//       // Assuming req.body contains the cart data
//       const newCart = await cartService.createCart(req.body);
//       res.status(201).json(newCart);
//     } catch (error) {
//       res.status(500).json({ error: "Error creating cart" });
//     }
//   },

//   deleteCart: async (req, res) => {
//     try {
//       const cartId = req.params.id;
//       const deletedCart = await cartService.deleteCart(cartId);
//       if (!deletedCart) {
//         return res.status(404).json({ error: "Cart not found" });
//       }
//       res.json(deletedCart);
//     } catch (error) {
//       res.status(500).json({ error: "Error deleting cart" });
//     }
//   },

//   updateCart: async (req, res) => {
//     try {
//       const cartId = req.params.id;
//       console.log(cartId);
//       // Assuming req.body contains the updated cart data
//       const updatedCart = await cartService.updateCart(cartId, req.body);
//       if (!updatedCart) {
//         return res.status(404).json({ error: "Cart not found" });
//       }
//       res.json(updatedCart);
//     } catch (error) {
//       res.status(500).json({ error: "Error updating cart" });
//     }
//   },
// };
