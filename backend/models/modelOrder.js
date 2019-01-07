const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema(
    {
        place: Number,
        user: String,
        dishes: String,
        time: { type: Date, default: Date.now },
        weiter: String,
        totalPrice: Number,
        status: String
    },
    { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);