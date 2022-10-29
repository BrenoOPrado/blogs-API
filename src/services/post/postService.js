const { BlogPost, Category } = require('../../models');

const createPost = async ({ title, content, categoryIds }) => {
    const posts = await BlogPost.findAll({
        limit: 1,
        order: [
            ['id', 'DESC'],
        ],
    });
    const id = posts[0].dataValues.id + 1;
    const createdPost = await BlogPost.create({
        id,
        title,
        content,
        categoryIds,
    }, {
        include: [{
            association: Category,
            as: 'categoryIds',
        }],
    });

    console.log(createPost);

    return createdPost;
};

module.exports = {
    createPost,
};