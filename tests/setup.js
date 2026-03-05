import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "../src/app.js";

dotenv.config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
}, 30000);

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

export default app;