// const postValidate = require('../services/post/postValidate');
const postService = require('../services/post/postService');
const { BlogPost, Category, User } = require('../models');
// const { findUserById } = require('./userController');

/* const addPost = async (req, res) => {
    const result = await postValidate.bodyValidate(req.body);

    if (!result.isValid) {
        const { status, message } = result;
        return res.status(status).json({ message });
    }

    const post = await createPost(req.body);

    return res.status(201).json(post);
}; */

const findAllPost = async (_req, res) => {
    const allPost = await postService.findAllPost();

    return res.status(200).json(allPost);
};

const findPostById = async (req, res) => {
    const { id } = req.params;

    const validationId = await postService.postValidateId(id);

    if (validationId.message) {
        const { message } = validationId;
        return res.status(404).json({ message });
    }

    return res.status(200).json(validationId);
};

module.exports = {
    // addPost,
    findAllPost,
    findPostById,
};