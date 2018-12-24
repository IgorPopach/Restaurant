const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TableSchema = new Schema(
    {
        id: Number,
        tableName: String,
        status: String
    },
    { timestamps: true }
);

module.exports = mongoose.model('Table', TableSchema);