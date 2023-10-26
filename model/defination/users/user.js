const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    lowercase: true,
  },
  age: Number,
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    // validate: {
    //   validator: isEmail,
    //   message: "invalid email",
    // },
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  address: {
    street: String,
    city: String,
  },
  cretedAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

module.exports = mongoose.model("user", userSchema);

// const { database, DataTypes } = require("sequelize");

// let sequelize = require("");

// const user = sequelize.define(
//   "user",
//   {
//     id: {
//       primaryKey: true,
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//     },
//     fullName: {
//       allowNull: false,
//       type: DataTypes.STRING,
//     },
//     email: {
//       allowNull: false,
//       type: DataTypes.STRING,
//     },
//     password: {
//       allowNull: false,
//       type: DataTypes.STRING,
//     },
//     phoneNumber: {
//       allowNull: false,
//       type: DataTypes.INTEGER,
//     },
//   },
//   {
//     sequelize,
//     timestamps: true,
//     paranoid: true,
//     modelName: "user",
//   }
// );

// module.exports = "user";
