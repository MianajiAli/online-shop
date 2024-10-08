const express = require('express');
const { register, login, logout } = require('../controllers/authController');
const router = express.Router();

// Routes for authentication
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout); // Add logout route

module.exports = router;
