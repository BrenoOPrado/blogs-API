const express = require('express');
const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');

const routers = express.Router();

routers.use('/login', loginRouter);

routers.use('/user', userRouter);

module.exports = routers;