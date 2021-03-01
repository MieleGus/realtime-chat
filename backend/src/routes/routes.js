const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const chatRoomRouter = require('./chatRoomRouter');
module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200).send({ message: 'real chat app API' });
    });

    app.use('/auth', authRouter);
    app.use('/user', userRouter);
    app.use('/messages', chatRoomRouter);

};