const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
  phoneBrand: {
    type: String,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  dateChecked: {
    type: Date,
    required: true
  },

  checkby: {
    type: String,
    required: true
  },

  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Inventory = mongoose.model('inventory', InventorySchema);
module.exports = Inventory;