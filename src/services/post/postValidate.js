const { Category } = require('../../models');

const isEmpty = (body) => {
    const keys = Object.keys(body);
    for (let i = 0; i < keys.length; i += 1) {
        if (!body[keys[i]]) {
            return true;
        }
    }

    return false;
};

const categoryNotFound = async (categoriesArr) => {
    const categories = await Category.findAll();
    
    for (let i = 0; i < categoriesArr.length; i++) {
        if (!categories.some(
            (category) => category.id === Number(categoriesArr[i]),
        )) {
            return true;
        }        
    }

    return false;
};

const bodyValidate = async (body) => {
    if (isEmpty(body)) {
        return {
            isValid: false,
            status: 400,
            message: 'Some required fields are missing',
        };
    }

    if (await categoryNotFound(body.categoryIds)) {
        return {
            isValid: false,
            status: 400,
            message: 'one or more "categoryIds" not found',
        };
    }

    return { isValid: true };
};

module.exports = {
    bodyValidate,
};