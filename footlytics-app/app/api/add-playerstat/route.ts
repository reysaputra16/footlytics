import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userid = searchParams.get('userid');
  const position = searchParams.get('position');
  const pace = searchParams.get('pace');
  const shooting = searchParams.get('shooting');
  const passing = searchParams.get('passing');
  const dribbling = searchParams.get('dribbling');
  const defense = searchParams.get('defense');
  const physical = searchParams.get('physical');

  try {
    if (!userid || !position || !pace || !shooting || !passing || !dribbling || !defense || !physical) throw new Error("Input is incomplete");
    await sql`INSERT INTO playerstats (userid, position, pace, shooting, passing, dribbling, defense, physical, wins, draws, loss) 
    VALUES (${userid}, ${position}, ${pace}, ${shooting}, ${passing}, ${dribbling}, ${defense}, ${physical}, 0, 0, 0);`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  // const players = await sql`SELECT * FROM players;`;
  // return NextResponse.json({ players }, { status: 200 });
  return NextResponse.redirect("http://localhost:3000/home");
}

// Sample API call:
// http://localhost:3000/api/add-playerstat?userid=6&position=MID&pace=78&shooting=85&passing=84&dribbling=88&defense=28&physical=47