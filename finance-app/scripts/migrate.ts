import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { config } from "dotenv";

config({ path: ".env.local" });
const sql = neon(
  process.env.DATABASE_URL ||
    "postgresql://NeonDb_owner:e6gZmlI0sXJx@ep-misty-mouse-a53a9wrw.us-east-2.aws.neon.tech/NeonDb?sslmode=require"
);
const db = drizzle(sql);
const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "drizzle" });
  } catch (error) {
    console.error("Error during migration:", error);
    process.exit(1);
  }
};
main();
