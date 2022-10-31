const express = require('express');
const tokenValidation = require('../middlewares/tokenValidation');
const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.use(tokenValidation);

// postRouter.post('/', postController.addPost);
postRouter.get('/', postController.findAllPost);

module.exports = postRouter;