const jwt = require("jsonwebtoken");

const generateToken = user => {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role_id,
    emial: user.email
  };
  const secret = process.env.SECRET || "secret text - came from .env";
  const options = {
    expiresIn: "20h"
  };
  return jwt.sign(payload, secret, options);
};

module.exports = generateToken;
