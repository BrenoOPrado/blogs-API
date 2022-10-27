const userValidate = require('../services/userValidate');
const { User } = require('../models');

const addUser = async (req, res) => {
    const result = await userValidate(req.body);

    if (result.token) {
      return res.status(201).json(result);
    }

    const { status, message } = result;

    return res.status(status).json({ message });
};

const findAllUser = async (_req, res) => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return res.status(200).json(users);
};

module.exports = {
  addUser,
  findAllUser,
};