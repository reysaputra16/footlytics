import { stats, playingStyle } from "../constants";
import SmallStatCard from "./SmallStatCard";
import PlayStyleCard from "./PlayStyleCard";
import TipCard from "./TipCard";
import NextMatchCard from "./NextMatchCard";
import WinRateCard from "./WinRateCard";
import RecentGamesGraph from "./RecentGamesGraph";
import MatchCards from "./MatchCards";
import PerformanceCard from "./PerformanceCard";

// Test

const Home = () => {
  return (
    <div className="flex justify-center w-full h-full bg-primary font-poppins">
      <div className="grid grid-rows-7 grid-flow-col gap-4 items-center w-full max-w-screen-lg py-4">
        <div className="grid grid-cols-[30%_70%] gap-4 h-full">
          {/* Play Style Box */}
          <PlayStyleCard
            pace={80}
            shooting={75}
            passing={60}
            dribbling={72}
            defense={30}
            physical={55}
          />
          <PerformanceCard />
        </div>
        <div className="grid grid-cols-[75%_25%] gap-4 h-full">
          {/* Recent Games Box */}
          <RecentGamesGraph />
          {/* 2 Stat Cards beside Recent Games */}
          <div className="grid grid-rows-2 gap-4 w-full h-[400px]">
            <SmallStatCard title="Average Rating" value="6.05" unit="/10" />
            <SmallStatCard title="Average Speed" value="12.5" unit="km/h" />
          </div>
        </div>
        <div>03</div>
        <div>03</div>
        <div>03</div>
        <div>03</div>
        <div>03</div>
      </div>
    </div>
  );
};

export default Home;
