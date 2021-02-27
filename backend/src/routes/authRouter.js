const express = require('express');
const { Register, Login } = require('../controllers/authController');

const router = express.Router();

router.post('/register', Register);
router.post('/login', Login)

// const authMiddleware = require('../middlewares/auth')
//router.use(authMiddleware)
module.exports = router;