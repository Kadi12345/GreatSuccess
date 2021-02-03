const db = require('./../db');
const Orders = db.Orders;

module.exports = async function (req, res) {
  //kas siia peame lisama mingi välja, mis  meil näiteks userite all olemas on
  try {
    let filter = {};
    filter = req.query;
    if (req.query.Email === 'true') {
      filter.Email = { $exists: true };
    }

    console.log(filter);

    let allOrders = await Orders.find(filter).lean();
    allOrders = allOrders.map((order) => {
      let totalPrice = 0;
      let finalProducts = [];
      for (let product of order.products) {
        const productTotalPrice = product.price * product.quantity;
        product.totalPrice = productTotalPrice;
        finalProducts.push(product);
        totalPrice += product.totalPrice;
      }
      order.totalPrice = totalPrice;
      return order;
    });
    res.status(200).json({ allOrders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
