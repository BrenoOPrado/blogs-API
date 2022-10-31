/* const { BlogPost, Category, PostCategory } = require('../../models');

const createPost = async ({ title, content, categoryIds }) => {

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
};

module.exports = {
    createPost,
}; */