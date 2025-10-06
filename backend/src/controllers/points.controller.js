const pointsService = require('../services/points.service');

const getBalance = async (req, res) => {
  try {
    const userId = req.user.id;
    const balance = await pointsService.getBalance(userId);
    res.status(200).json({ success: true, data: { balance } });
  } catch (error) {
    res.status(404).json({ success: false, error: { message: error.message } });
  }
};

const spendPoints = async (req, res) => {
  try {
    const userId = req.user.id;
    const { amount } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, error: { message: 'Invalid amount' } });
    }
    const newBalance = await pointsService.spendPoints(userId, amount);
    res.status(200).json({ success: true, data: { newBalance } });
  } catch (error) {
    res.status(400).json({ success: false, error: { message: error.message } });
  }
};

const getHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const history = await pointsService.getHistory(userId);
    res.status(200).json({ success: true, data: history });
  } catch (error) {
    res.status(500).json({ success: false, error: { message: error.message } });
  }
};

module.exports = {
  getBalance,
  spendPoints,
  getHistory,
};