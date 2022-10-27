const userValidate = require('../services/userValidate');

const userController = async (req, res) => {
    const result = await userValidate(req.body);

    if (result.token) {
      console.log(result);
      return res.status(201).json(result);
    }

    const { status, message } = result;

    return res.status(status).json({ message });
};

module.exports = userController;