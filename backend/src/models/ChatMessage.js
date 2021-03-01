const mongoose = require('../config/database')

const ChatMessageSchema = new mongoose.Schema(
    {
        message: {
            type: String,
            require: true,
        },
        sender_id: {
            type: String,
            require: true,
        },
        sender_name: {
            type: String,
        },
        room_id: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const ChatMessage = mongoose.model('ChatMessage', ChatMessageSchema);

module.exports = ChatMessage;
