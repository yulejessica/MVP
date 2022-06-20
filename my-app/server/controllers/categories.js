const Category = require('../models/category.js');

module.exports = {
  get: async (req, res) => {
    try{
      const categories = await Category.find();
      res.status(200).json(categories);
    }catch(err) {
      console.log("error while getting all categories", err);
    }
  },

  create: async (req, res) => {
    const newCategory = new Category(req.body);
    try{
      const savedCategory = await newCategory.save();
      res.status(200).json(savedCategory);
    } catch(err) {
      console.log("error while post new category", err);
    }
  },

};
