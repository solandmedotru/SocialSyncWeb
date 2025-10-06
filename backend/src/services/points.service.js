const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getBalance = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { points: true },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user.points;
};

const spendPoints = async (userId, amount) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    throw new Error('User not found');
  }

  if (user.points < amount) {
    throw new Error('Insufficient points');
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      points: {
        decrement: amount,
      },
    },
  });

  await prisma.pointTransaction.create({
    data: {
      userId,
      type: 'spend',
      amount,
    },
  });

  return updatedUser.points;
};

const getHistory = async (userId) => {
  const transactions = await prisma.pointTransaction.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });

  return transactions;
};

module.exports = {
  getBalance,
  spendPoints,
  getHistory,
};