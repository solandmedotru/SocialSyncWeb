const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: { id: true, email: true, points: true },
      });

      if (!req.user) {
        return res.status(401).json({ success: false, error: { message: 'Not authorized, user not found' } });
      }

      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ success: false, error: { message: 'Not authorized, token failed' } });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, error: { message: 'Not authorized, no token' } });
  }
};

module.exports = { protect };