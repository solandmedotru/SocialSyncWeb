const express = require('express');
const router = express.Router();
const pointsController = require('../controllers/points.controller');
const { protect } = require('../middlewares/auth.middleware');

// All routes are protected
router.use(protect);

// GET /api/points/balance
router.get('/balance', pointsController.getBalance);

// POST /api/points/spend
router.post('/spend', pointsController.spendPoints);

// GET /api/points/history
router.get('/history', pointsController.getHistory);

module.exports = router;