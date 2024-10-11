import { CircleHelp } from "lucide-react";

const PlayerCard = ({ data, page }: { data: any; page: string }) => {
  return (
    <div
      className={`${
        page === "dashboard"
          ? "w-[20%]"
          : page === "user"
          ? "w-[40%]"
          : "w-[20%]"
      } bg-bgPrimary rounded-[10px] p-[20px]`}
    >
      <div className="flex flex-col gap-[20px] justify-center">
        <h2 className="font-poppins text-textPrimary mb-[20px] text-[20px]">
          Player Card
        </h2>
        <div className="flex flex-col p-[20px] gap-[10px] justify-between items-center">
          <div className="flex h-full justify-center items-center">
            <CircleHelp width={100} height={100} />
          </div>
          <div className="grid grid-cols-2 gap-[10px] xl:text-[15px] lg:text-[14px]">
            <span className="flex text-textSecondary justify-end">Name:</span>
            <span>{data.name}</span>
            <span className="flex text-textSecondary justify-end">Age:</span>
            <span>{data.age}</span>
            <span className="flex text-textSecondary justify-end">Weight:</span>
            <span>{data.weight}</span>
            <span className="flex text-textSecondary justify-end">Height:</span>
            <span>{data.height}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
