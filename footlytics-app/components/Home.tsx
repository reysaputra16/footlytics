// Component imports
import { stats, playingStyle } from "../constants";
import SmallStatCard from "./SmallStatCard";
import PlayStyleCard from "./PlayStyleCard";
import TipCard from "./TipCard";
import NextMatchCard from "./NextMatchCard";
import WinRateCard from "./WinRateCard";
import RecentGamesGraph from "./RecentGamesGraph";
import MatchCards from "./MatchCards";
import LastMatchReport from "./LastMatchReport";
import SmallStatCardNoUnit from "./SmallStatCardNoUnit";

// Tool imports
import { sql } from "@vercel/postgres";

const Home = async ({ userId }: { userId: string }) => {
  const res = await sql`SELECT * FROM playerstats WHERE userid = ${userId};`;
  const users = res.rows;

  return (
    <div className="flex justify-center w-full h-full bg-primary font-poppins pl-[60px]">
      <div className="grid grid-rows-7 grid-flow-col gap-4 items-center w-full max-w-screen-lg py-4">
        <div className="grid grid-flow-col gap-4 h-full">
          {users.map((user, index) => (
            <>
              <PlayStyleCard
                key={user.userid}
                pace={user.pace}
                shooting={user.shooting}
                passing={user.passing}
                dribbling={user.dribbling}
                defense={user.defense}
                physical={user.physical}
              />
              <LastMatchReport
                key={user.userid}
                wins={user.wins}
                draws={user.draws}
                losses={user.loss}
              />
            </>
          ))}
        </div>
        <div className="grid grid-flow-col-dense gap-4 h-full">
          {/* Recent Games Box */}
          <RecentGamesGraph />
          {/* 2 Stat Cards beside Recent Games */}
          <div className="grid grid-rows-2 gap-4 w-full h-[400px]">
            <SmallStatCard title="Average Rating" value="6.05" unit="/10" />
            <SmallStatCard title="Average Speed" value="12.5" unit="km/h" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 h-full">
          {/* Appearance Stats */}
          <SmallStatCardNoUnit title="Appearances" value="12" />
          {/* Goals Stats */}
          <SmallStatCardNoUnit title="Goals" value="5" />
          {/* Wins */}
          <SmallStatCardNoUnit title="Wins" value="8" />
          {/* Losses */}
          <SmallStatCardNoUnit title="Losses" value="4" />
        </div>
        <div>03</div>
        <div>03</div>
        <div>03</div>
        <div>03</div>
      </div>
    </div>
  );
};

export default Home;
