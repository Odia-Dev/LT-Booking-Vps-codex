import { prisma } from "../src/lib/prisma";
import { auth } from "../src/lib/auth";
import * as dotenv from "dotenv";
import * as crypto from "crypto";

dotenv.config();

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.error("Error: ADMIN_EMAIL and ADMIN_PASSWORD environment variables are required in .env.");
    process.exit(1);
  }

  // Check if admin user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    console.log(`Admin user with email ${email} already exists. Skipping creation.`);
    return;
  }

  console.log(`Creating admin user: ${email}...`);

  try {
    const ctx = await auth.$context;
    
    // Hash the password using Better Auth's password utility
    const hashedPassword = await ctx.password.hash(password);
    
    const userId = crypto.randomUUID();
    const accountId = crypto.randomUUID();

    // Create user and account inside a Prisma transaction
    await prisma.$transaction(async (tx) => {
      // Create user
      const user = await tx.user.create({
        data: {
          id: userId,
          email,
          name: "Admin",
          emailVerified: true,
        },
      });

      // Create account
      await tx.account.create({
        data: {
          id: accountId,
          accountId: user.id, // Set accountId to userId for credential provider
          providerId: "credential",
          userId: user.id,
          password: hashedPassword,
        },
      });
    });

    console.log("Admin user created successfully!");
  } catch (error) {
    console.error("Failed to create admin user:", error);
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
