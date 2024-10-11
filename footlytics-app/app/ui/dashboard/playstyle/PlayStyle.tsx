"use client";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PlayStyle = ({ data, page }: { data: any; page: string }) => {
  return (
    <div
      className={`${
        page === "dashboard"
          ? "w-[40%]"
          : page === "user"
          ? "w-[40%]"
          : "w-[40%]"
      } bg-bgPrimary rounded-[10px] p-[20px]`}
    >
      <h2 className="font-poppins text-textPrimary mb-[20px] text-[20px]">
        Play Style
      </h2>
      <ResponsiveContainer width={"100%"} height={"90%"}>
        <RadarChart
          outerRadius={110}
          width={300}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          {/*<PolarRadiusAxis angle={60} domain={[0, 100]} />*/}
          <Radar
            name="Player"
            dataKey="A"
            stroke="#007CA2"
            strokeWidth={3}
            fill="#00B9F2"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PlayStyle;
