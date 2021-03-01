const express = require('express');
const { getMessagesFromRoom } = require('../controllers/chatMessageController');

const router = express.Router();

router.get('/', getMessagesFromRoom);

module.exports = router;