const loginValidate = require('../services/login/loginValidation');

const loginContoller = async (req, res) => {
    const result = await loginValidate(req.body);

    if (result.token) {
      return res.status(200).json(result);
    }

    const { status, message } = result;

    return res.status(status).json({ message });
};

module.exports = loginContoller;