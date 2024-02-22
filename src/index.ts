import { Client } from "pg";
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL
});

async function createUsersTable() {
  try {
    await client.connect();
    const result = await client.query(`CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`);
    console.log(result);
    console.log("Table created successfully");
  } catch (error:any) {
    console.error('Error:', error.message);
  } finally {
    await client.end();
  }
}

createUsersTable();
