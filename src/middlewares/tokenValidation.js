const { authenticateToken } = require('../utils/jwt');

const tokenValidation = async (req, res, next) => {
    const { authorization } = req.headers;

    const validated = await authenticateToken(authorization);

    if (validated.status) {
        const { status, message } = validated
        return res.status(status).json({ message });
    }

    next();
};

module.exports = tokenValidation;