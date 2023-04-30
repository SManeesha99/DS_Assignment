const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema ({
  
  sellerID : {
    type: String,
    required: true
  },
  // sellerFName : {
  //   type: String,
  //   required: true
  // },
  // sellerLName : {
  //   type: String,
  //   required: true
  // },
  name : {
    type: String,
    required : true
  },
  description : {
    type:String,
    required: true
  },
  quantity : {
    type:Number,
    required: true
  },
  price : {
    type: String,
    required : true 
  },
  status : {
    type: String,
    default: "Available"
    // required: true
  },
  image : {
    type: String,
    // required : true
  }

});

module.exports = Item = mongoose.model('item', ItemSchema);