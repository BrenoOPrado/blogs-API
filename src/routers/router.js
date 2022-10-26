const express = require('express');
// const tokenValidation = require('../services/tokenValidation');
const loginRouter = require('./loginRouter');

const routers = express.Router();

routers.use('/login', loginRouter);

// routers.use(tokenValidation);

module.exports = routers;