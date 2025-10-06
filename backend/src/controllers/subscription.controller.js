const subscriptionService = require('../services/subscription.service');

const getStatus = async (req, res) => {
  try {
    const userId = req.user.id;
    const status = await subscriptionService.getStatus(userId);
    res.status(200).json({ success: true, data: status });
  } catch (error) {
    res.status(404).json({ success: false, error: { message: error.message } });
  }
};

const cancelSubscription = async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await subscriptionService.cancelSubscription(userId);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, error: { message: error.message } });
  }
};

module.exports = {
  getStatus,
  cancelSubscription,
};