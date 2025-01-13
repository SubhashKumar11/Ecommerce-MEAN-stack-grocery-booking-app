//for special product model or admin code
 const mongoose = require('mongoose') 
const userSchema = mongoose.Schema({
    id: { type: String }, rate: {
        type: Number
    }, name: { type: String }, margin: { type: Number }, mrp: { type: Number },
    imageUrl: { type: String }, category: {
        type: String, required: [true, 'category is require'],
        unique: false
    }
}); const userModel = new mongoose.model("userModel", userSchema)
module.exports = userModel;
