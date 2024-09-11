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
    await sql`INSERT INTO players (name, matches, goals, pace, shooting, passing, dribbling, defense, physical) 
    VALUES (${name}, ${matches}, ${goals}, ${pace}, ${shooting}, ${passing}, ${dribbling}, ${defense}, ${physical});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const pets = await sql`SELECT * FROM players;`;
  return NextResponse.json({ pets }, { status: 200 });
}

// http://localhost:3000/api/add-player?playerName=Test&matches=5&goals=5&pace=20&shooting=20&passing=20&dribbling=20&defense=20&physical=20