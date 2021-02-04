const db = require('../db');
const Products = db.Products;

module.exports = async function (req, res) {
  try {
    const product = await Products.deleteOne({ _id: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

