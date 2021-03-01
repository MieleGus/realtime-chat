
const ChatMessage = require('../models/ChatMessage');

const webSocket = async (server) => {
    const io = require('socket.io')(server, {
        cors: {
          origin: '*',
        }
    });

    let connectedUsers = {};
    let room;

    io.on('connection', (socket) => {
      let { userEmail, userName } = socket.handshake.query;

      connectedUsers[userEmail] = socket.id;

      socket.on('disconnect', async () => {
          delete connectedUsers[userEmail];

          if (userEmail) {
            let message = `${userName} saiu da sala.`

            io.in(room).emit('receivedMessage', { message })
  
            data = {
              message,
              room_id: room,
            }
  
            await ChatMessage.create(data)
          }
          
      });
      
      
      socket.on('joinRoom', async (data) => {
        console.log("🚀 ~ file: websocket.js ~ line 24 ~ socket.on ~ data", data)
        
        socket.join(data.room)
        room = data.room

        io.in(data.room).emit("room", `joined room ${data.room}, user -> ${userEmail}`);
        
        let message = `${userName} entrou na sala.`
        
        io.in(room).emit('receivedMessage', { message })
        data = {
          message,
          room_id: room,
        }

        await ChatMessage.create(data)
      })

      socket.on('chatMessage', async (data) => {
        await ChatMessage.create(data)
        io.in(room).emit('receivedMessage', data)
      })


    })
  };

module.exports = webSocket