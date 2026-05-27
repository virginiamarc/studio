import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/Contact.js";
import newsletterRoutes from "./routes/Newsletter.js";

connectDB();

const app = express();

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

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);

app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));