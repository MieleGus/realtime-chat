const authRouter = require('./authRouter')

module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200).send({ message: 'real chat app API' });
    });

    app.use('/auth', authRouter);
};