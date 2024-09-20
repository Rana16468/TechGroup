const jwt = require("jsonwebtoken");

const generateToken = (payload, secret, expiresIn) => {
  const token = jwt.sign(payload, secret, { algorithm: "HS256", expiresIn });
  return token;
};

const verifyToken = (token, refresh_secret) => {
  return jwt.verify(token, refresh_secret);
};

module.exports = {
  jwtHelpers: {
    generateToken,
    verifyToken,
  },
};
