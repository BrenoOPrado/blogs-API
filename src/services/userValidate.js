const { User } = require('../models');
const { generateToken } = require('../utils/jwt');

const nameValidate = (name) => {
    if (name.length < 8) {
        return {
            isValid: false,
            result: {
                status: 400,
                message: '"displayName" length must be at least 8 characters long',
            },
        };
    }
    return { isValid: true };
};

const existEmail = async (email) => {
    const user = await User.findOne({
        attributes: [ 'email' ],
        where: { email },
    });
    if (!user) {
        return false;
    }
    return true;
}

const emailValidate = async (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email.match(regex)) {
        return {
            isValid: false,
            result: {
                status: 400,
                message: '"email" must be a valid email',
            },
        };
    }
    if (await existEmail(email)) {
        return {
            isValid: false,
            result: {
                status: 409,
                message: 'User already registered',
            },
        };
    }
    return { isValid: true };
};

const passwordValidate = (password) => {
    if (password.length < 6) {
        return {
            isValid: false,
            result: {
                status: 400,
                message: '"password" length must be at least 6 characters long',
            },
        };
    }
    return { isValid: true };
};

const userIsValid = async (user) => {
    await User.create({ ...user });
    const token = generateToken(user);
    return { token };
};

const userValidate = async (newUser) => {
    const name = nameValidate(newUser.displayName);
    if (!name.isValid) {
        return name.result;
    }

    const email = await emailValidate(newUser.email);
    if (!email.isValid) {
        return email.result;
    }

    const password = passwordValidate(newUser.password);
    if (!password.isValid) {
        return password.result;
    }

    const userResult = await userIsValid(newUser);
    return userResult;
};

module.exports = userValidate;