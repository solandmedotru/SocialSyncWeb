const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhook.controller');

// POST /api/webhooks/rustore
router.post('/rustore', webhookController.handleRuStoreWebhook);

module.exports = router;