import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  console.log("Contact form submission received:", data);
  return NextResponse.json({ message: "Received your request. We'll be in touch shortly!", received: data });
}