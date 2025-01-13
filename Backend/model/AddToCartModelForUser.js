//for user to add product to cart model
const mongoose = require('mongoose');
const AddToCartSchema = mongoose.Schema({
    userId: {
        type: String
    }, id: { type: Number }, rate: { type: Number }, name: { type: String }, margin: {
        type: Number
    }, mrp: { type: Number }, imageUrl: { type: String }
}) ;
const AddToCartModel =
    new mongoose.model("AddToCartModel", AddToCartSchema);
module.exports =
    AddToCartModel;