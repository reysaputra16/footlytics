import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const userId = searchParams.get('userId');
  const email = searchParams.get('email');

  try {
    if (!firstName || !lastName || !userId || !email) throw new Error("Input is incomplete");
    await sql`INSERT INTO users (firstName, lastName, userId, email) 
    VALUES (${firstName}, ${lastName}, ${userId}, ${email});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  // const players = await sql`SELECT * FROM players;`;
  // return NextResponse.json({ players }, { status: 200 });
  return NextResponse.redirect("http://localhost:3000/overview");
}

// http://localhost:3000/api/add-user?firstName=Reynard&lastName=Saputra&userId=1&email=test@footlytics.net