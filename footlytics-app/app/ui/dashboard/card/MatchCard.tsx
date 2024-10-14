import { Dot, ShieldQuestion } from "lucide-react";
import Link from "next/link";

const MatchCard = ({ data, page }: { data: any; page: string }) => {
  return (
    <div
      className={`${
        page === "match" ? "w-full" : ""
      } bg-bgPrimary rounded-[10px] p-[20px]`}
    >
      <div className="flex flex-col gap-[25px] justify-center">
        <div className="relative w-full flex justify-center items-center">
          <div className="absolute end-[51%]">
            <span>
              {data.day} {data.date}
            </span>
          </div>

          <div className="absolute">
            <span>•</span>
          </div>

          <div className="absolute start-[51%]">
            <span>{data.competition}</span>
          </div>
        </div>
        <div className="relative flex flex-row gap-[50px] justify-center items-center font-poppins">
          <span className="absolute flex items-center end-[57%] text-[30px] gap-[20px]">
            <ShieldQuestion width={50} height={50} /> {data.home}
          </span>
          <span className="text-[45px] rounded-[10px] p-[20px] border">
            {data.homeScore} - {data.awayScore}
          </span>
          <span className="absolute flex items-center start-[57%] text-[30px] gap-[20px]">
            {data.away} <ShieldQuestion width={50} height={50} />
          </span>
        </div>
        <span className="relative flex justify-center items-center font-poppins gap-[5px]">
          <span className="text-textSecondary">Venue:</span>{" "}
          <a target="_blank" href={data.location} className="hover:underline">
            {data.venue}
          </a>
        </span>
      </div>
      <div className="flex flex-col gap-[20px] justify-center"></div>
    </div>
  );
};

export default MatchCard;
