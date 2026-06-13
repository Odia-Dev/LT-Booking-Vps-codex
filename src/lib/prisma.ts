import * as dotenv from "dotenv";
dotenv.config();

import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not defined in the environment.");
  }

  let pool: Pool;

  try {
    const url = new URL(connectionString);
    const database = url.pathname.substring(1); // remove leading slash
    
    // Explicitly parse connection details and decode the password
    pool = new Pool({
      host: url.hostname,
      port: url.port ? parseInt(url.port, 10) : 5432,
      user: url.username,
      password: decodeURIComponent(url.password), // Decodes special characters safely
      database: database,
      ssl: connectionString.includes("sslmode=") && !connectionString.includes("sslmode=disable")
        ? { rejectUnauthorized: false }
        : undefined,
    });
  } catch {
    // Fallback to connectionString if URL parsing fails
    pool = new Pool({ connectionString });
  }

  const adapter = new PrismaPg(pool);

  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

