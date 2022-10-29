const postValidate = require('../services/post/postValidate');
const { createPost } = require('../services/post/postService');
// const { BlogPost, Category, PostCategory, User } = require('../models');
// const { findUserById } = require('./userController');

const addPost = async (req, res) => {
    const result = await postValidate.bodyValidate(req.body);

    if (!result.isValid) {
        const { status, message } = result;
        return res.status(status).json({ message });
    }

    const post = await createPost(req.body);

    return res.status(201).json(post);
};

/* const findAllPost = async (_req, res) => {
    const post = await BlogPost.findAll({
        attributes: { exclude: ['user_id'] },
        include: {
            user: User,
        }
    });

    const blog = post.map(async (bp) => {
        const user = await User.findOne({
            where: { id: bp.userId }
        });

        const postCategories = await PostCategory
        .findAll({
            where: { post_id: bp.id },
        });

        const categories = [];

        for (let i = 0; i < postCategories.length; i += 1) {
            const category = await Category.findOne({
                where: { id: postCategories[i].categoryId }
            });
            categories.push(category);
        }

        return {
            ...bp,
            user,
            categories,
        };
    });

    return res.status(200).json(post);
} */

module.exports = {
    addPost,
    // findAllPost,
};