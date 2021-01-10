const db = require('./../db')
const Orders = db.Orders

module.exports = async function (req, res) {
  try {
    await Orders.update({_id: req.params.id}, {
      $set: req.body
    })
    res.status(200).json({ message: 'Õnnestus!' })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}