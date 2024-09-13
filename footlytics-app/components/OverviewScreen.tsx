import { stats, playingStyle } from "../constants";
import SmallStatCard from "./SmallStatCard";
import PlayStyleCard from "./PlayStyleCard";
import TipCard from "./TipCard";
import NextMatchCard from "./NextMatchCard";
import WinRateCard from "./WinRateCard";

// Test

const OverviewScreen = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-primary overflow-auto">
      <div className="flex flex-col h-1/8 w-full py-[20px] px-[35px] lg:gap-[10px] gap-[8px] border-borderColor border-l-2 border-b">
        <h1 className="xxl:text-[28px] xl:text-[24px] text-[20px] font-poppins font-normal">
          Welcome back, Max!
        </h1>
        <h1 className="xxl:text-[50px] xl:text-[40px] text-[30px] font-poppins font-normal">
          Overview
        </h1>
      </div>
      <div className="flex flex-row w-full border-borderColor border-l-2 border-t border-b">
        {stats.map((stat, index) => (
          <SmallStatCard key={index} {...stat} />
        ))}
      </div>
      <div className="flex flex-1 flex-row w-full border-borderColor border-l-2 border-t">
        <PlayStyleCard {...playingStyle} />
        <TipCard />
        <div className="flex flex-1 flex-col w-full border-borderColor border-l-2">
          <NextMatchCard
            home="Alpha"
            away="Beta"
            date="11.10.2024"
            time="09:00"
            location="Amphionpark"
          />
          <WinRateCard progress={50} />
        </div>
        <TipCard />
      </div>
    </div>
  );
};

export default OverviewScreen;
