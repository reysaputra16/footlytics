import { ChevronDown } from "lucide-react";

const TableStats = ({ data, page }: { data: any; page: string }) => {
  return (
    <div
      className={`${
        page === "dashboard" ? "w-[40%]" : "w-[40%]"
      } bg-bgPrimary p-[20px] rounded-[10px]`}
    >
      <div className="flex justify-between">
        <h2 className="font-poppins text-textPrimary mb-[20px] text-[20px]">
          Top Performers
        </h2>
        <button className="flex p-[20px] gap-[5px] rounded-[10px] bg-bgSecondary">
          <ChevronDown /> Filter
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-[16px]">
            <td className="p-[10px]">No.</td>
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Goals</td>
            <td className="p-[10px]">Assists</td>
            <td className="p-[10px]">Games Played</td>
          </tr>
        </thead>
        <tbody>
          {data.map((player, index) => (
            <tr key={player.name} className="text-[14px]">
              <td className="p-[10px]">{index + 1}</td>
              <td className="p-[10px]">
                <div className="flex flex-col">
                  <span>{player.name}</span>
                  <text className="text-[12px] text-gray-400">
                    {player.team}
                  </text>
                </div>
              </td>
              <td className="p-[10px]">{player.goals}</td>
              <td className="p-[10px]">{player.assists}</td>
              <td className="p-[10px]">{player.gamesPlayed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableStats;
