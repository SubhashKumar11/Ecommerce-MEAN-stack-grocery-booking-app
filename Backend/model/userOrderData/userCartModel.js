const mongoose = require('mongoose');
const userCartSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    cart: [{
        id: {
            type:
                String
        }, rate: { type: Number }, name: { type: String }, margin: { type: Number }, mrp: {
            type: Number
        }, imageUrl: { type: String }, category: { type: String }
    }]
});
const userCartModel = new mongoose.model("userCartModel", userCartSchema)
module.exports = userCartModel;