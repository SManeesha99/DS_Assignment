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
  // ItemID: {
  //   type: String,
  //   required: true,
  // },
  // ItemName: {
  //   type: String,
  //   required: true,
  // },
  // Itemprice: {
  //   type: Number,
  //   required: true,
  // },
  // image: {
  //   type: String,
  //   required: true,
  // }
});

module.exports = Order = mongoose.model("Order", OrderSchema);