const verifyRole = (req, res, next) => {
  const userData = req.user.userType;

  if (userData === 'ADMIN') {
    res.send("Everybody, let's welcome our Lord and Savior!");
  } else {
    res.send("You're a PHONY!");
  }
  next();
};

module.exports = verifyRole;
