const db = require('./../db')
const Products = db.Products

module.exports = async function (req, res) {
  try {
    await Products.create(req.body)
    console.log('Tere!')
    res.status(200).json({ message: 'Toote lisamine õnnestus!' })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}