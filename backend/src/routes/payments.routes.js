const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');
const { protect } = require('../middlewares/auth.middleware');

// All routes in this file are protected
router.use(protect);

// POST /api/payments/verify
router.post('/verify', paymentController.verifyPurchase);

// POST /api/subscriptions/verify
router.post('/subscriptions/verify', paymentController.verifySubscription);

module.exports = router;