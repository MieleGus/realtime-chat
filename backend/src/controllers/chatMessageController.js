const ChatMessage = require('../models/ChatMessage');

const getMessagesFromRoom = async (req, res) => {
    try {
        const { room } = req.query
        const messages = await ChatMessage.find({room_id: room})
        res.status(200).send(messages)
    } catch(error) {
        res.status(400).send({ error: 'Ocorreu um erro, tente novamente! '})
    }
}

module.exports = {
    getMessagesFromRoom
}