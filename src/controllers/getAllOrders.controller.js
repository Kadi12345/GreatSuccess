const db = require('./../db')
const Orders = db.Orders

module.exports = async function (req, res) {
  //kas siia peame lisama mingi välja, mis  meil näiteks userite all olemas on
  try {
    let filter = {}
    filter = req.query
    if (req.query.Email === 'true') {
      filter.Email = { $exists: true }
    }

    console.log(filter)

    const allOrders = await Orders.find(filter)
    res.status(200).json({ allOrders })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}