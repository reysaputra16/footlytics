"use client";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data, page }: { data: any; page: string }) => {
  return (
    <div
      className={`${
        page === "dashboard"
          ? "w-[60%]"
          : page === "user"
          ? "w-[60%]"
          : "w-[60%]"
      } bg-bgPrimary p-[20px] rounded-[10px]`}
    >
      <h2 className="font-poppins text-textPrimary mb-[20px] text-[20px]">
        Recent Games
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line type="monotone" dataKey="goals" stroke="#8884d8" />
          <Line type="monotone" dataKey="assists" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
