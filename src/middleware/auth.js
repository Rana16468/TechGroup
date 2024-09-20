const httpStatus = require("http-status");

const jwtHealpers = require("../helper/jwtHealpers.js");
const { jwt_access_secret } = require("../config/index.js");
const ApiError = require("../error/ApiError.js");

// Middleware for authentication and role-based access control
const auth = (...roles) => {
  return async (req, res, next) => {
    try {
      // Get the token from the authorization header
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(
          httpStatus.UNAUTHORIZED,
          "You are not authorized, Token missing",
          ""
        );
      }

      // Verify the token
      const verifiedUser = jwtHealpers.verifyToken(token, jwt_access_secret);

      // Attach user to the request
      req.user = verifiedUser;

      // Check if the user's role is authorized
      if (roles.length && !roles.includes(verifiedUser.role)) {
        throw new ApiError(
          httpStatus.UNAUTHORIZED,
          "You are not authorized for this role",
          ""
        );
      }

      // Call the next middleware or route handler
      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = auth;
