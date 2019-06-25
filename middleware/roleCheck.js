//const restricted = require("./restrictedRoute");

const roleValidate = (roles = []) => (req, res, next) => {
  if (typeof roles === "number") {
    roles = [roles];
  }

  if (roles.length && roles.includes(req.decodedToken.role)) {
    next();
  } else {
    res.status(401).json({ message: "You are not alowed" });
  }
};

module.exports = roleValidate;
