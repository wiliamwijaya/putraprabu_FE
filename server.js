import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "express-async-errors";
import { createServer } from "http";

import connectDB from "./db/connectDB.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5000/",
  },
});
dotenv.config();
app.use(express.json());

const connect = async () => {
  const port = process.env.PORT || 5000;
  try {
    await connectDB();
    connectToSocketIo(io);
    httpServer.listen(port, () => console.log(`Connected to port ${port}`));
  } catch (error) {
    throw new Error(error.message);
  }
};

connect();
