const express = require('express');
const tokenValidation = require('../middlewares/tokenValidation');
const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.use(tokenValidation);

// postRouter.post('/', postController.addPost);
postRouter.get('/', postController.findAllPost);
postRouter.get('/:id', postController.findPostById);

module.exports = postRouter;