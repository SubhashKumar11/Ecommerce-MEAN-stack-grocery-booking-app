//for special product model or admin code
const mongoose = require('mongoose')
const OffersimageSchema = mongoose.Schema({
    imageUrl: { type: String }
}); const OffersimageModel = new mongoose.model("OffersimageModel", OffersimageSchema)
module.exports = OffersimageModel; 