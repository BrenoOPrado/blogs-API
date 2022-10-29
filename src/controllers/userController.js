const userValidate = require('../services/user/userValidate');
const userIdValidate = require('../services/user/userIdValidate');
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

const findUserById = async (req, res) => {
  const { id } = req.params;

  const result = await userIdValidate(id);
  const { status, message } = result;

  if (status === 200) {
    return res.status(status).json(message);
  }

  return res.status(status).json({ message });
};

module.exports = {
  addUser,
  findAllUser,
  findUserById,
};