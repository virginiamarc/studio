import { connectToDatabase } from "@/lib/mongodb";
import mongoose from "mongoose";

// Simple schema (you can move this to /models later if you want)
const NewsletterSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

// Prevent model overwrite in dev/hot reload
const Newsletter =
  mongoose.models.Newsletter || mongoose.model("Newsletter", NewsletterSchema);

export async function POST(req) {
  try {
    await connectToDatabase();

    const { email } = await req.json();

    if (!email) {
      return Response.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const entry = await Newsletter.create({ email });

    return Response.json({ success: true, entry }, { status: 201 });
  } catch (error) {
    console.error("FULL ERROR:", error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}