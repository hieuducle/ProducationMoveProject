const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;


const Customer = new Schema({
  code: {type: String},
  name: { type: String },
  product: {type: String},
  slug: { type: String, slug: 'name', unique: true }
}, {
  timestamps: true,
});

module.exports = mongoose.model('customer', Customer);
