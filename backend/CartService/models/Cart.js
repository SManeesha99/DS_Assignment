const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  ItemID: {
    type: String,
    required: true
  },
  ItemName: {
    type: String,
    required: true
  },
  ItemDescription: {
    type: String,
    required: true
  },
  ItemPrice: {
    type: String,
    required: true
  },
  ItemImage: {
    type: String,
    required: true
  }
});

module.exports = Cart = mongoose.model("cart", CartSchema);
