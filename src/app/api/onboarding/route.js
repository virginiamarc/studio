import { connectToDatabase } from "@/lib/mongodb";
import Client from "@/models/Client";

export async function POST(req) {
  try {
    await connectToDatabase();
    const data = await req.json();
    const entry = await Client.create(data);

    return new Response(JSON.stringify({ success: true, entry }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
