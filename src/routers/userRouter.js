const express = require('express');
const tokenValidation = require('../middlewares/tokenValidation');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/', userController.addUser);

userRouter.use(tokenValidation);

userRouter.get('/', userController.findAllUser);
userRouter.get('/:id', userController.findUserById);

module.exports = userRouter;