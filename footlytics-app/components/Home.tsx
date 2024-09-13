import { stats, playingStyle } from "../constants";
import SmallStatCard from "./SmallStatCard";
import PlayStyleCard from "./PlayStyleCard";
import TipCard from "./TipCard";
import NextMatchCard from "./NextMatchCard";
import WinRateCard from "./WinRateCard";
import RecentGamesGraph from "./RecentGamesGraph";

// Test

const Home = () => {
  return (
    <div className="flex xxl:ml-[100px] xl:ml-[75px] ml-[60px] justify-center w-full h-full bg-primary font-poppins">
      <div className="grid grid-rows-7 grid-flow-col gap-4 items-center w-full max-w-screen-lg py-4">
        <div className="grid grid-cols-[75%_25%] gap-4 h-full">
          {/* Recent Games Box */}
          <RecentGamesGraph />
          {/* 2 Stat Cards beside Recent Games */}
          <div className="grid grid-rows-2 gap-4 w-full h-[400px]">
            <div className="flex justify-center items-center w-full h-full border-slate-200 border-2 rounded-lg bg-cardColor">
              02
            </div>
            <div className="flex justify-center items-center w-full h-full border-slate-200 border-2 rounded-lg bg-cardColor">
              03
            </div>
          </div>
        </div>
        <div>02</div>
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
