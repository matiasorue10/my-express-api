import { prisma } from "../prisma/client";

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const createUser = async (data: {
  email: string;
  name?: string;
  password: string;
}) => {
  return await prisma.user.create({ data });
};

export const getUser = async (id: number) => {
  return await prisma.user.findUnique({ where: { id } });
};

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};

export const getUserHashedPasswordByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};
