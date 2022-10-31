const { BlogPost, Category, User } = require('../../models');

/* const createPost = async ({ title, content, categoryIds }) => {

    console.log('antes da criação');

    const createdPost = await BlogPost.create({
        title,
        content,
    });

    categoryIds.forEach(async (cId) => {
        await PostCategory.create({
            postId: ,
            categoryId: cId,
        });
    });

    console.log(createdPost);

    return createdPost;
}; */

const findAllPost = async () => {
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

    return allPost;
};

module.exports = {
    findAllPost,
    // createPost,
};