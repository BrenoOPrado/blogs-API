const validate = require('../services/tokenValidation');

const validateToken = (req, _res, next) => {
  const { authorization } = req.headers;
  const user = validate.validateToken(authorization);
  req.user = user;

  next();
};

module.exports = {
  validateToken,
};