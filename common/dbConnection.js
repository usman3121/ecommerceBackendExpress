const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  } catch (err) {
    console.error("error connecting to the database", err);
  }
})();

module.exports = {
  dbConnection: () => mongoose.connection,
};
