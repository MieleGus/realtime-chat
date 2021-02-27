require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const webSocket = require('./services/websocket');
const bodyParser = require('body-parser')

const router = require('./routes/routes')

require(('./config/database'))

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());

webSocket(server);

require('./routes/routes')(app);

server.listen(3333, () => {
    console.log('server listening on 3333');
});
