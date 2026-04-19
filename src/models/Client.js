import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    projectType: String,
    goals: String,
    timeline: String,
    budget: String,
  },
  { timestamps: true }
);

export default mongoose.models.Client || mongoose.model("Client", ClientSchema);
