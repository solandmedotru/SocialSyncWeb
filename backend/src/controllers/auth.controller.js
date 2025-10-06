const authService = require('../services/auth.service');

const register = async (req, res) => {
  try {
    const { email, password, deviceId } = req.body;
    const { user, token } = await authService.register({ email, password, deviceId });
    res.status(201).json({
      success: true,
      data: {
        id: user.id,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, error: { message: error.message } });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.login({ email, password });
    res.status(200).json({
      success: true,
      data: {
        id: user.id,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    res.status(401).json({ success: false, error: { message: error.message } });
  }
};

module.exports = {
  register,
  login,
};