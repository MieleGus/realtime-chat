const User = require('../models/User');

const getAll = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users)
    } catch(error) {
        res.status(400).send({ error: 'Ocorreu um erro, tente novamente! '})
    }
}

module.exports = {
    getAll
}