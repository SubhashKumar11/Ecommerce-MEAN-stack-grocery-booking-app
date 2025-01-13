const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    }, description: { type: String, require: true }, userId: {
        type:
            mongoose.Schema.Types.ObjectId, ref: 'User', require: true
    }
}, { timestamps: true });
const notesModel = new mongoose.model("notesModel", noteSchema)
 module.exports =  notesModel;
//here the user created by mongodb will be showing using note model for indindiviual user