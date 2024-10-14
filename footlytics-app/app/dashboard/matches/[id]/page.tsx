import StatCard from "@/app/ui/dashboard/card/StatCard";
import LineChart from "@/app/ui/dashboard/chart/LineChart";
import PlayStyle from "@/app/ui/dashboard/playstyle/PlayStyle";
import RadialChart from "@/app/ui/dashboard/chart/RadialChart";
import WinDrawLossChart from "@/app/ui/dashboard/chart/WinDrawLossChart";
import TableStats from "@/app/ui/dashboard/table/TableStats";
import PlayerCard from "@/app/ui/dashboard/playercard/PlayerCard";
import PlayerStats from "@/app/ui/dashboard/playerstats/PlayerStats";
import Heatmap from "@/app/ui/dashboard/heatmap/Heatmap";
import MatchCard from "@/app/ui/dashboard/card/MatchCard";

const statValues = [
  {
    title: "Goals",
    value: "10",
  },
  {
    title: "Assists",
    value: "5",
  },
  {
    title: "Average Speed",
    value: "9.15 km/h",
  },
];

const recentGames = [
  {
    name: "15.08",
    goals: 1,
    assists: 3,
  },
  {
    name: "16.08",
    goals: 0,
    assists: 0,
  },
  {
    name: "17.08",
    goals: 3,
    assists: 1,
  },
  {
    name: "18.08",
    goals: 1,
    assists: 2,
  },
  {
    name: "19.08",
    goals: 2,
    assists: 2,
  },
  {
    name: "20.08",
    goals: 2,
    assists: 0,
  },
  {
    name: "21.08",
    goals: 4,
    assists: 0,
  },
];

const playstyle = [
  {
    subject: "Pace",
    A: 80,
    fullMark: 100,
  },
  {
    subject: "Shooting",
    A: 75,
    fullMark: 100,
  },
  {
    subject: "Passing",
    A: 70,
    fullMark: 100,
  },
  {
    subject: "Dribbling",
    A: 82,
    fullMark: 100,
  },
  {
    subject: "Defense",
    A: 30,
    fullMark: 100,
  },
  {
    subject: "Physical",
    A: 45,
    fullMark: 100,
  },
];

const rating = 7.53;
const avgRating = [
  {
    rating: rating / 10,
  },
  {
    rating: (10 - rating) / 10,
  },
];

const winDrawLoss = [
  {
    name: "Wins",
    value: 4,
  },
  {
    name: "Draws",
    value: 1,
  },
  {
    name: "Losses",
    value: 2,
  },
];

const topPerformers = [
  {
    name: "John Doe",
    team: "FC Twente",
    goals: 68,
    assists: 10,
    gamesPlayed: 9,
  },
  {
    name: "Lionel Messi",
    team: "Inter Miami",
    goals: 13,
    assists: 20,
    gamesPlayed: 9,
  },
  {
    name: "Cristiano Ronaldo",
    team: "Al Nassr",
    goals: 10,
    assists: 10,
    gamesPlayed: 9,
  },
  {
    name: "Kevin De Bruyne",
    team: "Manchester City",
    goals: 5,
    assists: 8,
    gamesPlayed: 9,
  },
  {
    name: "Marcus Rashford",
    team: "Manchester United",
    goals: 2,
    assists: 1,
    gamesPlayed: 9,
  },
];

const playerInfo = {
  name: "John Doe",
  age: 23,
  weight: "72 kg",
  height: "180 cm",
};

const matchInfo = {
  day: "Tuesday",
  time: "14:00",
  date: "27 Aug 2024",
  competition: "Athan Cup 2024",
  home: "Team A",
  away: "Team B",
  homeScore: 2,
  awayScore: 3,
  venue: "Amphionpark",
  location: "https://maps.app.goo.gl/ynrFk7Y2xr6GZXew7",
};

const SingleMatchPage = () => {
  return (
    <div className="flex gap-[20px] mt-[20px]">
      <div className="flex flex-row gap-[20px] 2xl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg w-screen">
        <div className="flex flex-col gap-[20px] p-[10px] w-full">
          <MatchCard data={matchInfo} page="match" />
        </div>
      </div>
    </div>
  );
};

export default SingleMatchPage;
