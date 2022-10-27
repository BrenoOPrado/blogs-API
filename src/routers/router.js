const express = require('express');
const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');
const categoriesRouter = require('./categoriesRouter');

const routers = express.Router();

routers.use('/login', loginRouter);

routers.use('/user', userRouter);

routers.use('/categories', categoriesRouter);

module.exports = routers;