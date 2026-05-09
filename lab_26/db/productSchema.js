const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
	name: String,
	category: String,
	price: String
});
module.export = mongoose.model('Product', productSchema);
