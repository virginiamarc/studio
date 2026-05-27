import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import contactRoutes from "./routes/Contact.js";
import newsletterRoutes from "./routes/Newsletter.js";

connectDB();

const app = express();

// Required for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: [
      "https://studio.pranswendeou.com",
      "http://localhost:3000"
    ],
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

// ⭐ STATIC FILES — THIS IS THE FIX ⭐
// This now correctly points to backend/public/
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));