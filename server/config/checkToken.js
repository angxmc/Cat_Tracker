/**
 * # MIDDLEWARE
 * - check if there's a token
 *  1. use the GET method
 *  2. check if we have a token, either from header or query parameter
 *  3. remove Bearer
 *  4. verify, take in a callback function if we have a valid token. we gonna get a error or a decoded token. if it's valid, decode, else, throw an error.
 *  5. if we get an error, then set the user to null.
 *  6. if it's valid,
 */

// config/checkToken.js

const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Check for the token being sent in a header or as a query parameter
  let token = req.get("Authorization") || req.query.token;
  if (token) {
    // Remove the 'Bearer ' if it was included in the token header
    token = token.replace("Bearer ", "");
    // Check if token is valid and not expired
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      // If valid token, decoded will be the token's entire payload
      // If invalid token, err will be set
      req.user = err ? null : decoded.user;
      // If your app cares... (optional)
      req.exp = err ? null : new Date(decoded.exp * 1000);
      return next();
    });
  } else {
    // No token was sent
    req.user = null;
    return next();
  }
};
