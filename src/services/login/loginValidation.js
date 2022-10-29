const { generateToken } = require('../../utils/jwt');
const { User } = require('../../models');

const userValidate = async (email, password) => {
    const user = await User.findOne({
        attributes: ['id', 'email', 'displayName', 'image'],
        where: { email, password },
    });

    if (!user) {
        const status = 400;
        const message = 'Invalid fields';

        return { status, message };
    }

    const token = generateToken(user.dataValues);
    
    return { token };
};
    
const loginValidate = async ({ email, password }) => {
    if (!email || !password || email.length <= 0 || password.length <= 0) {
        const status = 400;
        const message = 'Some required fields are missing';

        return { status, message };
    }
    const result = await userValidate(email, password);
    return result;
};

module.exports = loginValidate;