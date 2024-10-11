import SearchBar from "@/app/ui/dashboard/search/searchbar";
import { Shield, ShieldQuestion } from "lucide-react";
import Link from "next/link";

const matches = [
  {
    matchid: "20041",
    date: "29.08.2024",
    time: "09:00",
    home: "Team A",
    away: "Team B",
    homeScore: 2,
    awayScore: 0,
  },
  {
    matchid: "09312",
    date: "28.08.2024",
    time: "14:00",
    home: "Team C",
    away: "Team D",
    homeScore: 3,
    awayScore: 2,
  },
  {
    matchid: "99822",
    date: "27.08.2024",
    time: "15:00",
    home: "Team E",
    away: "Team F",
    homeScore: 1,
    awayScore: 3,
  },
  {
    matchid: "59876",
    date: "26.08.2024",
    time: "12:00",
    home: "Team G",
    away: "Team H",
    homeScore: 5,
    awayScore: 4,
  },
  {
    matchid: "10982",
    date: "26.08.2024",
    time: "10:00",
    home: "Team I",
    away: "Team J",
    homeScore: 2,
    awayScore: 5,
  },
  {
    matchid: "22244",
    date: "25.08.2024",
    time: "17:00",
    home: "Team K",
    away: "Team L",
    homeScore: 1,
    awayScore: 2,
  },
];

const Analysis = () => {
  return (
    <div className="flex gap-[20px] mt-[20px] font-poppins rounded-[10px] justify-center">
      <div className="flex flex-col justify-between gap-[20px] 2xl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg w-screen">
        <SearchBar placeholder="Search match here..." />
        <table className="w-full rounded-[10px] bg-bgPrimary">
          <thead>
            <tr className="border-b-2">
              <td className="p-[30px]">Date</td>
              <td className="p-[30px]">Time</td>
              <td className="p-[30px]">Match</td>
              <td className="p-[30px]">Score</td>
              <td className="p-[30px]">Analysis</td>
            </tr>
          </thead>
          <tbody>
            {matches.map((match, index) => (
              <tr
                key={index}
                className="cursor-pointer hover:bg-bgSecondary rounded-[10px]"
              >
                <td className="p-[30px]">{match.date}</td>
                <td className="p-[30px]">{match.time}</td>
                <td className="p-[30px]">
                  <div className="flex">
                    <span className="flex gap-[10px]">
                      <ShieldQuestion width={25} height={25} /> {match.home}
                    </span>
                    <span className="px-[20px]">vs</span>
                    <span className="flex gap-[10px]">
                      <ShieldQuestion width={25} height={25} /> {match.away}
                    </span>
                  </div>
                </td>
                <td className="p-[30px]">
                  {match.homeScore} - {match.awayScore}
                </td>
                <td>
                  <Link href={`/dashboard/matches/${match.matchid}`}>
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

export default Analysis;
