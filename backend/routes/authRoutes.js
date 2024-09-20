const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// Routes for authentication
router.post('/register', register);
router.post('/login', login);
//TODO : Add logout 
module.exports = router;
