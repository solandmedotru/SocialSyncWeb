const paymentService = require('../services/payment.service');

const verifyPurchase = async (req, res) => {
  try {
    const { purchaseId, orderId, productId } = req.body;
    const userId = req.user.id;

    const result = await paymentService.verifyPurchase({ userId, purchaseId, orderId, productId });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, error: { message: error.message } });
  }
};

const verifySubscription = async (req, res) => {
  try {
    const { subscriptionToken } = req.body;
    const userId = req.user.id;

    const result = await paymentService.verifySubscription({ userId, subscriptionToken });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, error: { message: error.message } });
  }
};

module.exports = {
  verifyPurchase,
  verifySubscription,
};