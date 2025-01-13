//for special product model or admin code 
const mongoose = require('mongoose');
const allItemListSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true
    }, rate: { type: Number }, 
    name: { type: String }, 
    margin: { type: Number },
    mrp: { type: Number }, imageUrl: { type: String }, category: {
        type: String, required: true,
        unique: false
    }
});
 const allItemListModel = new mongoose.model("allItemListModel", allItemListSchema);
module.exports = allItemListModel;