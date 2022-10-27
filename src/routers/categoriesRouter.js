const express = require('express');
const tokenValidation = require('../middlewares/tokenValidation');
const categoriesController = require('../controllers/categoriesController');

const categoriesRouter = express.Router();

categoriesRouter.use(tokenValidation);

categoriesRouter.post('/', categoriesController.addCategories);

module.exports = categoriesRouter;