// import { config } from "dotenv";
// import { defineConfig } from "drizzle-kit";

// config({ path: ".env.local" });

// export default defineConfig({
//   schema: "./db/schema/*",
//   driver: "pg",
//   dbCredentials: {
//     connectionString:
//       process.env.DATABASE_URL ||
//       "postgresql://NeonDb_owner:e6gZmlI0sXJx@ep-misty-mouse-a53a9wrw.us-east-2.aws.neon.tech/NeonDb?sslmode=require",
//   },
//   verbose: true,
//   strict: true,
// });

import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url:
      process.env.DATABASE_URL ||
      "postgresql://NeonDb_owner:e6gZmlI0sXJx@ep-misty-mouse-a53a9wrw.us-east-2.aws.neon.tech/NeonDb?sslmode=require",
  },
  verbose: true,
  strict: true,
});