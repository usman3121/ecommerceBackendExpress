const userService = require("../services/userService");

module.exports = {
  getAllUserData: async (req, res) => {
    const data = await userService.getAllUserData();
    res.send(data);
    console.log(data);
  },
  createUser: async (req, res) => {
    const userData = req.body; // Assuming user data is sent in the request body
    try {
      const createdUser = await userService.createUser(userData);
      res
        .status(201)
        .json({ message: "User created successfully", user: createdUser });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating user", error: error.message });
    }
  },

  deleteUsers: async (req, res) => {
    const userId = req.params.id;

    const deleteU = await userService.deleteUsers(userId);
    res.send(deleteU);
  },

  getUserById: async (req, res) => {
    const userId = req.params.id;

    const user = await userService.getUserById(userId);
    console.log(userId);
    console.log(user);
    res.send(user);
  },
};
