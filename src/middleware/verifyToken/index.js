const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('jwt_token');
  if (!token) return res.status(401).send('Please login!');

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch {
    res.status(400).send('Invalid token');
  }
};

module.exports = verifyToken;
