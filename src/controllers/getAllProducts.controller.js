const db = require('../db')
const Products = db.Products

module.exports = async function (req, res) {
  try {
    let filter = {}
    filter = req.query
    if (req.query.type === 'true') { //kui tootel on type (TOIT, MÄNGUASJAD või TARVIKUD on required) kirjeldatud, siis leitakse üles
      filter.type = { $exists: true }
    }

    console.log(filter)

    const allProducts = await Products.find(filter)
    res.status(200).json({ allProducts })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}