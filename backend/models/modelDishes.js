const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DishesSchema = new Schema(
    {
        id: Number,
        category: String,
        name: String,
        ingredients: String,
        description: String,
        weight: Number,
        price: Number,
        image: String,
        avgTime: Number
    },
    { timestamps: true }
);

module.exports = mongoose.model('Dishes', DishesSchema);