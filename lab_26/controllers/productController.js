const Product = require('../db/productSchema');

exports.getList = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.create = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
};

exports.update = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

exports.remove = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'deleted' });
};
