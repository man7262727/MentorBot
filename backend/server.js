import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();

// Allow all origins (safe for a public chatbot API)
app.use(cors());
app.options("*", cors());

app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("MentorBot API is running successfully!");
});

app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
