const nameValidation = (body) => {
    if (!body.name) {
        return {
            message: '"name" is required',
        };
    }

    return body.name;
};

module.exports = {
    nameValidation,
};