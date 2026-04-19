import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/Contact";


export async function POST(req) {
  try {
    await connectToDatabase();
    const data = await req.json();
    const entry = await Contact.create(data);

    return new Response(JSON.stringify({ success: true, entry }), {
      status: 201,
    });
  } catch (error) {
    console.error("FULL ERROR:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: error.message,
      }),
      { status: 500 }
    );
  }
}

