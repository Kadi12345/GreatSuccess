const db = require('./../db');
const Orders = db.Orders;
const Users = db.Users;
const Products = db.Products;

module.exports = async function (req, res) {
  try {
    const client = await Users.findOne({ _id: req.body.client });
    console.log(client);

    const order = {
      orderNumber: req.body.orderNumber,
      orderStatus: req.body.orderStatus,
      deliveryMethod: req.body.deliveryMethod,
      deliveryAddress: req.body.deliveryAddress,
      parcelMachine: req.body.parcelMachine,
      client: {
        clientID: client._id,
        userType: client.userType,
        firstName: client.firstName,
        lastName: client.lastName,
        email: client.email,
        address: client.address,
      },
      products: [],
    };
    for await (const product of req.body.products) {
      const productFromDb = await Products.findOne({ _id: product.productID });
      product.price = productFromDb.price;
      product.productName = productFromDb.productName;
      order.products.push(product);
    }
   
    console.log(order);
    await Orders.create(order);
    console.log('Tere!');
    res.status(200).json({ message: 'Õnnestus!' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
