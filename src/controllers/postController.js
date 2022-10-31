// const postValidate = require('../services/post/postValidate');
// const { createPost } = require('../services/post/postService');
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
    const allPost = await BlogPost.findAll({
        attributes: {exclude: ['user_id']},
        include: [{
            model: User,
            as: 'user',
            attributes: {
                exclude: ['password'],
              },
        }, {
            model: Category,
            as: 'categories',
        }],
    });

    return res.status(200).json(allPost);
};

module.exports = {
    // addPost,
    findAllPost,
};