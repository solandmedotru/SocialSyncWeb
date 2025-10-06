const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getProfile = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      subscription: true, // Include subscription details
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  // We don't want to send the password hash
  const { password, ...userProfile } = user;

  return userProfile;
};

module.exports = {
  getProfile,
};