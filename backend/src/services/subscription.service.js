const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getStatus = async (userId) => {
  const subscription = await prisma.subscription.findUnique({
    where: { userId },
  });

  if (!subscription) {
    // throw new Error('Subscription not found for this user');
    // It's better to return a null or a default status
    return { status: 'inactive' };
  }

  return subscription;
};

const cancelSubscription = async (userId) => {
  const subscription = await prisma.subscription.findUnique({
    where: { userId },
  });

  if (!subscription) {
    throw new Error('No active subscription to cancel');
  }

  // Here you would typically call the RuStore API to cancel the subscription first
  console.log(`Mocking RuStore API call to cancel subscription for user ${userId}`);

  const updatedSubscription = await prisma.subscription.update({
    where: { userId },
    data: { status: 'cancelled' },
  });

  return updatedSubscription;
};

module.exports = {
  getStatus,
  cancelSubscription,
};