import { Client } from "pg";
const client = new Client({
  connectionString:
    "postgresql://lionmahi4571:1riVXmO5dzNT@ep-nameless-shape-a1na6zs1.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
});

async function createUsersTable() {
  await client.connect();
  const result = await client.query(`CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`);
  console.log(result);
  console.log("Connected successfully");
}
createUsersTable();
