const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  BuyerID: {
    type: String,
    required: true,
  },
  buyerFName: {
    type: String,
    required: true,
  },
  buyerLName: {
    type: String,
    required: true,
  },
  Buyeraddress: {
    type: String,
    required: true,
  },
  BuyerEmail: {
    type: String,
    required: true,
  },
  BuyerMobile: {
    type: Number,
    required: true,
  },
  OrderNote: {
    type: String,
    required: true,
  },
  ItemIDs: [String],

  ItemPrices: [String],

  ItemNames: [String]
});

module.exports = Order = mongoose.model("Order", OrderSchema);