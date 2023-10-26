const userModel = require("../model/defination/users/user");

module.exports = {
  getAllUserData: async () => {
    const user = await userModel.find();
    return user;
  },
  createUser: async (userData) => {
    // Implement the logic to create a new user
    const user = new userModel(userData);
    const createdUser = await user.save();
    return createdUser;
  },

  deleteUsers: async (userId) => {
    const deleteU = await userModel.findByIdAndDelete(userId);
    return deleteU;
  },

  getUserById: async (userId) => {
    const getUser = await userModel.findById(userId);
    return getUser;
  },
};
