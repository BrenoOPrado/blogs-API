const express = require('express');
const loginContoller = require('../controllers/loginContoller');

const loginRouter = express.Router();

loginRouter.post('/', loginContoller);

module.exports = loginRouter;