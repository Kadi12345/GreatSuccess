const verifyRole = (req, res, next) => {
  const userData = req.user.userType;

  if (userData === 'ADMIN') {
    next();
  } else {
    res.send("You're a PHONY! Get out of here!");
  }
};

module.exports = verifyRole;
