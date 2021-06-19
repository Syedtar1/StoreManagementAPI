const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  product: String,
  manufacturer: String,
  instock: Number,
  lastpurchasedon: Date,
});

module.exports = mongoose.model("inventory", userSchema, "inventory");
