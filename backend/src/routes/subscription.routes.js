const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscription.controller');
const { protect } = require('../middlewares/auth.middleware');

// All routes are protected
router.use(protect);

// GET /api/subscriptions/status
router.get('/status', subscriptionController.getStatus);

// POST /api/subscriptions/cancel
router.post('/cancel', subscriptionController.cancelSubscription);

module.exports = router;