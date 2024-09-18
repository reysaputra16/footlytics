import { PlayStyleCard } from "@/components";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userid = searchParams.get('userid');

  try {
    if (!userid) throw new Error("Input is incomplete");
    const playerStats = await sql`SELECT * FROM playerstats WHERE userid = ${userid};`;
    return NextResponse.json({ playerStats }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// Sample API call:
// http://localhost:3000/api/get-playerstat?userid=1