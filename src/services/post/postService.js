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

const findPostById = async (id) => {
    const postById = await BlogPost.findOne({
        attributes: {
            exclude: ['user_id'],
            where: { id },
        },
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

    return postById;
};

const postValidateId = async (id) => {
    const allPost = await findAllPost();

    console.log('entrou na validação');

    if (!allPost.some((item) => item.id === Number(id))) {
        return { message: 'Post does not exist' };
    }

    console.log('passou da validação');

    const postById = await findPostById(id);
    return postById;
};

module.exports = {
    postValidateId,
    findAllPost,
    // createPost,
};