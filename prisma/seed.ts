import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const genPassword = process.env.USER_TEST_PASSWORDS;

async function main() {
  const bcrypt = require("bcrypt");
  const saltRounds = 10;

  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      password: await bcrypt.hash(genPassword, saltRounds),
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      name: "Bob",
      password: await bcrypt.hash(genPassword, saltRounds),
    },
  });
  console.log({ alice, bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
