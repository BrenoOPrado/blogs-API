const postService = require('../services/post/postService');

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
    findAllPost,
    findPostById,
};