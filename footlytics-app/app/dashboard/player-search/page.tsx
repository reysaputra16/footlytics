import SearchBar from "@/app/ui/dashboard/search/searchbar";
import { ShieldQuestion } from "lucide-react";
import Link from "next/link";

const players = [
  {
    playerid: "35182",
    player: "John Doe",
    position: "Forward",
    team: "Team A",
  },
  {
    playerid: "22102",
    player: "Lionel Messi",
    position: "Forward",
    team: "Team C",
  },
  {
    playerid: "55012",
    player: "Kevin De Bruyne",
    position: "Midfielder",
    team: "Team B",
  },
  {
    playerid: "89972",
    player: "Cristiano Ronaldo",
    position: "Forward",
    team: "Team D",
  },
  {
    playerid: "58888",
    player: "Joe Hart",
    position: "Goalkeeper",
    team: "Team E",
  },
  {
    playerid: "00022",
    player: "Rio Ferdinand",
    position: "Defender",
    team: "Team F",
  },
];

const PlayerSearch = () => {
  return (
    <div className="flex gap-[20px] mt-[20px] font-poppins rounded-[10px] w-full justify-center">
      <div className="flex flex-col justify-between gap-[20px] 2xl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg w-screen">
        <SearchBar placeholder="Search player here..." />
        <table className="w-full rounded-[10px] bg-bgPrimary">
          <thead>
            <tr className="border-b-2">
              <td className="p-[30px]">Player</td>
              <td className="p-[30px]">Position</td>
              <td className="p-[30px]">Team</td>
              <td className="p-[30px]">Profile</td>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index} className="hover:bg-bgSecondary rounded-[10px]">
                <td className="p-[30px]">{player.player}</td>
                <td className="p-[30px]">{player.position}</td>
                <td className="p-[30px]">
                  <span className="flex gap-[10px]">
                    <ShieldQuestion width={25} height={25} /> {player.team}
                  </span>
                </td>
                <td>
                  <Link href={`/dashboard/players/${player.playerid}`}>
                    <button className="p-[30px]">
                      <span className="font-poppins py-[10px] px-[20px] rounded-[10px] bg-teal-600 hover:bg-teal-700 border-2">
                        View
                      </span>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerSearch;
