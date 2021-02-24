const webSocket = (server) => {
    const io = require('socket.io')(server, {
        cors: {
          origin: '*',
        }
    });

    io.on('connection', (socket) => {
       console.log("🚀 ~ file: websocket.js ~ line 6 ~ io.on ~ socket", socket)
       console.log(`Connected: ${socket.id}`);

       socket.on('disconnect', () =>
          console.log(`Disconnected: ${socket.id}`));
    });
}

module.exports = webSocket