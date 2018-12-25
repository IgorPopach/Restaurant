const express = require('express');
const router = express.Router();
const Dishes = require('../models/modelDishes');


router.get("/", (req, res) => {
    Dishes.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, dishesData: data });
    });
});

router.post('/add', (req, res) => {
    console.log('/addDishes work')
    let data = new Dishes();
  
    const { id, category, name, ingredients, description, weight, price, image } = req.body;
    console.log('{ id, category, name, ingredients, description, weight, price, image } ==>', id, category, name, ingredients, description, weight, price, image)
    if ((!id && id !== 0) || !category || !name || !ingredients || !description || !weight || !price || !image) {
        console.log('0_o')
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    }
    data.category = category;
    data.name = name;
    data.id = id;
    data.ingredients = ingredients;
    data.description = description;
    data.weight = weight;
    data.price = price;
    data.image = image;
    console.log('data addDishes ==>', data)
    data.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
});

module.exports = router;