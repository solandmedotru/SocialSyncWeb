const paymentService = require('../services/payment.service');

const handleRuStoreWebhook = async (req, res) => {
  try {
    const event = req.body;
    // It's crucial to verify the webhook signature in a real application
    // For now, we'll just process the event
    console.log('Received RuStore Webhook:', JSON.stringify(event, null, 2));

    await paymentService.handleWebhook(event);

    res.status(200).send('Webhook received');
  } catch (error) {
    console.error('Error handling RuStore webhook:', error);
    res.status(400).json({ success: false, error: { message: error.message } });
  }
};

module.exports = {
  handleRuStoreWebhook,
};