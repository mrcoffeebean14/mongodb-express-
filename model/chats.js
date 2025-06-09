const mongoose = require("mongoose")

const chatschema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
        maxlength: 60,
    },
    time: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const chat = mongoose.model('chat', chatschema);

module.exports = chat;