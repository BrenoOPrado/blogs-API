const express = require('express');
// const tokenValidation = require('../services/tokenValidation');
const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');

const routers = express.Router();

routers.use('/login', loginRouter);

// routers.use(tokenValidation);

routers.use('/user', userRouter);

module.exports = routers;