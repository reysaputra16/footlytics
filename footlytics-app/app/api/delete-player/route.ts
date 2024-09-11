import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('playerName');
  const matches = searchParams.get('matches');
  const goals = searchParams.get('goals');
  const pace = searchParams.get('pace');
  const shooting = searchParams.get('shooting');
  const passing = searchParams.get('passing');
  const dribbling = searchParams.get('dribbling');
  const defense = searchParams.get('defense');
  const physical = searchParams.get('physical');

  try {
    if (!name || !matches || !goals || !pace || !shooting || !passing || !dribbling || !defense || !physical) throw new Error("Input is incomplete");
    await sql`DELETE FROM players
    WHERE name = ${name};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const players = await sql`SELECT * FROM players;`;
  return NextResponse.json({ players }, { status: 200 });
}

// http://footlytics-dashboard.vercel.app/api/delete-player?playerName=Test