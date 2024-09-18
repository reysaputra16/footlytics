import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const competitionid = searchParams.get('competitionid');
  const competitionname = searchParams.get('competitionname');
  const location = searchParams.get('location');

  try {
    if (!competitionid || !competitionname || !location) throw new Error("Input is incomplete");
    await sql`INSERT INTO competitions (id, name, location) 
    VALUES (${competitionid}, ${competitionname}, ${location});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  // const players = await sql`SELECT * FROM players;`;
  // return NextResponse.json({ players }, { status: 200 });
  return NextResponse.redirect("http://localhost:3000/home");
}

// Sample API call:
// http://localhost:3000/api/add-competition?competitionid=1&competitionname=Athan%20Cup%202024&location=Berlin,%20Germany