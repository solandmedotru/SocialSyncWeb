const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { protect } = require('../middlewares/auth.middleware');

// GET /api/user/profile
router.get('/profile', protect, userController.getProfile);

module.exports = router;