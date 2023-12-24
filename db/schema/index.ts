import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
const connectionString = "postgresql://admin:admin@localhost:5432/forum"
const sql = postgres(connectionString, { max: 1 })
const db = drizzle(sql);
await migrate(db, { migrationsFolder: "./../migration" });
await sql.end();