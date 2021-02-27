const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/Auth');

const User = require('../models/User');

const generateToken = (params = {}) => {
    return jwt.sign({ params }, authConfig.secret, {
        expiresIn: 86400,
    }) 
}

const Register = async (req, res) => {
    try {
        const { email } = req.body;
        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'Email já existente!'});
        const user = await User.create(req.body);
        user.password = undefined;
        return res.send({ 
            user,
            token: generateToken({ id: user.id }),
        });
    } catch(error) {
        return res.status(400).send({ error: 'Registration failed!'});
    }
}

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user)
            return res.status(400).send({ error: 'Usuário e/ou senha inválidos!'});

        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: 'Usuário e/ou senha inválidos'});

        user.password = undefined; 

        res.send({ 
            user, 
            token: generateToken({ id: user.id }),
        });

    } catch(error) {
        return res.status(400).send({ error: 'Authentication failed!'});
    }
}

module.exports = {
    Register,
    Login
}