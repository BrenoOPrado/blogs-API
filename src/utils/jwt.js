const jwt = require('jsonwebtoken');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET;

const generateToken = ({ id, displayName, email }) => {
  const payload = {
    id,
    displayName,
    email,
  };

  const jwtConfig = {
    expiresIn: '50m',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, TOKEN_SECRET_KEY, jwtConfig);

  return token;
};

const authenticateToken = async (token) => {
  if (!token) {
    const status = 401;
    const message = 'Token not found';
    return { status, message };
  }

  try {
    const validateToken = jwt.verify(token, TOKEN_SECRET_KEY);
    console.log(validateToken);
    return validateToken;
  } catch (error) {
    const status = 401;
    const message = 'Expired or invalid token';
    return { status, message };
  }
};

module.exports = {
  generateToken,
  authenticateToken,
};