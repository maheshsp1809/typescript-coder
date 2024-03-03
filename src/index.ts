// import { Client } from "pg";
// import dotenv from 'dotenv';

// dotenv.config();

// const client = new Client({
//   connectionString: process.env.DATABASE_URL
// });

// async function createUsersTable() {
//   try {
//     await client.connect();
//     const result = await client.query(`CREATE TABLE IF NOT EXISTS users (
//       id SERIAL PRIMARY KEY,
//       username VARCHAR(50) UNIQUE NOT NULL,
//       email VARCHAR(255) UNIQUE NOT NULL,
//       password VARCHAR(255) NOT NULL,
//       created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//     );`);
//     console.log(result);
//     console.log("Table created successfully");
//   } catch (error:any) {
//     console.error('Error:', error.message);
//   } finally {
//     await client.end();
//   }
// }

// createUsersTable();

interface User1{
  name:string;
  age:number;
}

function sumOfAge(user1:User1, user2:User1){
  return user1.age + user2.age;
}
const ans=sumOfAge({name:"mahi",age:20},{name:"firoz",age:30});
console.log(ans)

type User ={
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, 'name' | 'email'>;
type UserProfileOptional= Partial<UserProfile>;

const displayUserProfile = (user: UserProfileOptional) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

displayUserProfile({name:"firox",email:"firox@gmail.com"})

type User3={
  
  name: string;
  email: string;
  
}

const user: Readonly<User3>={
  name:"utk",
  email:"utk@gmail.com",
}
// user.age=12; gives error

