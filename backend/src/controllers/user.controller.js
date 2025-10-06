const userService = require('../services/user.service');

const getProfile = async (req, res) => {
  try {
    // The user object is attached to the request by the 'protect' middleware
    const userId = req.user.id;
    const userProfile = await userService.getProfile(userId);

    res.status(200).json({
      success: true,
      data: userProfile,
    });
  } catch (error) {
    res.status(404).json({ success: false, error: { message: error.message } });
  }
};

module.exports = {
  getProfile,
};