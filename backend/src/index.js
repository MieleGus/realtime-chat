require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');
const webSocket = require('./websocket');

const app = express();
const server = http.Server(app);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('connected to database');
});

app.use(cors());

app.use(express.json());
app.use(routes);

webSocket(server);

server.listen(3333, () => {
    console.log('server listening on 3333')
});
