const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  oldid: {
    type: String,
    required: true,
  },
  ItemName: {
    type: String,
    required: true,
  },
  Itemprice: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = Order = mongoose.model("Order", OrderSchema);