
const ChatMessage = require('../models/ChatMessage');

const webSocket = async (server) => {
    const io = require('socket.io')(server, {
        cors: {
          origin: '*',
        }
    });

    let connectedUsers = {};

    io.on('connection', (socket) => {
      let { userEmail } = socket.handshake.query;

      connectedUsers[userEmail] = socket.id;

      socket.on('disconnect', () => {
          delete connectedUsers[userEmail];
      });
      let room;
      
      socket.on('joinRoom', (data) => {
        socket.join(data.room)
        room = data.room
        socket.broadcast.emit("broadcast", "hello friends!");
        io.in(data.room).emit("room", `joined room ${data.room}, user -> ${userEmail}`);
      })

      socket.on('chatMessage', async (data) => {
        await ChatMessage.create(data)
        io.in(room).emit('receivedMessage', data)
      })


    })
  };

module.exports = webSocket