const jwtUtil = require('../utils/jwt.util');

const tokenValidation = (token) => {
  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  const isValid = jwtUtil.validateToken(token);

  if (!isValid) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
};

module.exports = tokenValidation;