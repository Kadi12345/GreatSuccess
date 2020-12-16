const db = require('./../db')
const Users = db.Users

module.exports = async function (req, res) {
  try {
    await Users.update({_id: req.params.id}, {
      $set: req.body
    })
    res.status(200).json({ message: 'Successs!' })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
