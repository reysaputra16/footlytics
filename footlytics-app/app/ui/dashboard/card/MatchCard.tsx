import { Dot, ShieldQuestion } from "lucide-react";
import Link from "next/link";

const MatchCard = ({ data, page }: { data: any; page: string }) => {
  return (
    <div
      className={`${
        page === "match" ? "w-full" : ""
      } bg-bgPrimary rounded-[10px] p-[20px]`}
    >
      <div className="flex flex-col gap-[20px] justify-center">
        <span className="flex justify-center items-center font-poppins gap-[5px]">
          <span className="text-textSecondary">
            {data.day} {data.date}
          </span>{" "}
          <Dot /> {data.competition}
        </span>
        <div className="flex flex-row gap-[50px] justify-center items-center font-poppins">
          <span className="flex gap-[20px] text-[30px]">
            <ShieldQuestion width={50} height={50} /> {data.home}
          </span>
          <span className="text-[45px] rounded-[10px] p-[20px] border">
            {data.homeScore} - {data.awayScore}
          </span>
          <span className="flex gap-[20px] text-[30px]">
            {data.away} <ShieldQuestion width={50} height={50} />
          </span>
        </div>
        <span className="flex justify-center items-center font-poppins gap-[5px]">
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
