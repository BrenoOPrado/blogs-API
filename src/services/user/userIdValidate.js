const { User } = require('../../models');

const userIdValidate = async (id) => {
    const user = await User.findOne({
        attributes: {
          exclude: ['password'],
        },
        where: { id },
    });

    if (!user) {
        return { status: 404, message: 'User does not exist' };
    }

    console.log(user.dataValues);

    return { status: 200, message: user.dataValues };
};

module.exports = userIdValidate;