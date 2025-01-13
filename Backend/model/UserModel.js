const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
    username: { type: String },
    password: {
        type: String,
        require: true
    },
     email: { type: String, require: true, unique: true }
}, { timestamps: true });
const usersModel = new mongoose.model("usersModel", usersSchema)
module.exports = usersModel; 