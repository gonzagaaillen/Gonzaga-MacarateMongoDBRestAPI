const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhoneSchema = new Schema ({
  phoneBrand:{
    type: String,
    required: true
  },

  phoneQuantity: {
    type: Number,
    required: true
  },

  dateChecked: {
    type: Date,
    required: true
  },

  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Phone = mongoose.model('phone_inventory', PhoneSchema);
module.exports = Phone;