const validation = require('../services/categoriesValidation');
const { Category } = require('../models');

const addCategories = async (req, res) => {
    const result = validation.nameValidation(req.body);
    const { name } = req.body;

    if (result.message) {
        const { message } = result;
        return res.status(400).json({ message });
    }

    const newCategory = await Category.create({ name });

    return res.status(201).json(newCategory);
};

const findAllCategories = async (_req, res) => {
    const categories = await Category.findAll();

    return res.status(200).json(categories);
};

module.exports = {
    addCategories,
    findAllCategories,
};