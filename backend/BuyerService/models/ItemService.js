const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema ({
  name : {
    type: String,
    required : true
  },
  quantity : {
    type:Number,
    required: true
  },
  sellerName : {
    type: String,
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