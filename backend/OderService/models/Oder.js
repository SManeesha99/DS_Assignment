const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types

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
  ItemIDs: [{
    type: ObjectId,
    required: true,
    ref: "item",
  }]
});

module.exports = Order = mongoose.model("Order", OrderSchema);