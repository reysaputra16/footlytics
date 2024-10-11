"use client";
import { useState, useCallback, useEffect } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const renderActiveShape = (props: any) => {
  const [mainFont, setMainFont] = useState(16);
  const [percentFont, setPercentFont] = useState(12);

  const handleResize = useCallback(() => {
    if (window.innerWidth < 1700) {
      setMainFont(13);
      setPercentFont(9);
    } else {
      setMainFont(16);
      setPercentFont(12);
    }
  }, []);

  // Resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial values

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fontSize={mainFont}
        fill={
          payload.name === "Wins"
            ? "#00FF00"
            : payload.name === "Draws"
            ? "#FF8000"
            : payload.name === "Losses"
            ? "#FF0000"
            : fill
        }
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={
          payload.name === "Wins"
            ? "#00FF00"
            : payload.name === "Draws"
            ? "#FF8000"
            : payload.name === "Losses"
            ? "#FF0000"
            : fill
        }
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={
          payload.name === "Wins"
            ? "#00FF00"
            : payload.name === "Draws"
            ? "#FF8000"
            : payload.name === "Losses"
            ? "#FF0000"
            : fill
        }
      />
      <path
        d={`M${sx},${sy}L${mx},${my}`}
        stroke={
          payload.name === "Wins"
            ? "#00FF00"
            : payload.name === "Draws"
            ? "#FF8000"
            : payload.name === "Losses"
            ? "#FF0000"
            : fill
        }
        fill="none"
      />
      <circle
        cx={mx}
        cy={my}
        r={2}
        fill={
          payload.name === "Wins"
            ? "#00FF00"
            : payload.name === "Draws"
            ? "#FF8000"
            : payload.name === "Losses"
            ? "#FF0000"
            : fill
        }
        stroke="none"
      />
      <text
        x={mx + (cos >= 0 ? 1 : -1) * 12}
        y={my}
        textAnchor={textAnchor}
        fill="#FFFFFF"
        fontSize={mainFont}
      >{`${
        payload.name === "Wins"
          ? "W"
          : payload.name === "Draws"
          ? "D"
          : payload.name === "Losses"
          ? "L"
          : ""
      }: ${value}`}</text>
      <text
        x={mx + (cos >= 0 ? 1 : -1) * 12}
        y={my}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
        fontSize={percentFont}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

export default function App({ data, page }: { data: any; page: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState({ innerRadius: 60, outerRadius: 80 });
  const [cy, setCy] = useState("55%");

  const handleResize = useCallback(() => {
    if (window.innerWidth < 1700) {
      setRadius({ innerRadius: 36, outerRadius: 48 });
      setCy("45%");
    } else {
      setRadius({ innerRadius: 60, outerRadius: 80 });
      setCy("55%");
    }
  }, []);

  // Resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial values

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const onPieEnter = useCallback(
    (_: any, index: any) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div
      className={`${
        page === "dashboard"
          ? "w-[20%]"
          : page === "user"
          ? "w-[30%]"
          : "w-[20%]"
      } bg-bgPrimary rounded-[10px] p-[20px]`}
    >
      <h2 className="font-poppins text-textPrimary mb-[20px] text-[20px]">
        Win/Draw/Loss Stats
      </h2>
      <ResponsiveContainer width={"100%"} height={"90%"}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            innerRadius={radius.innerRadius} // Inner radius is 3/4 smaller of outer radius
            outerRadius={radius.outerRadius}
            fill="gray"
            dataKey="value"
            onMouseEnter={onPieEnter}
            cy={cy}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
