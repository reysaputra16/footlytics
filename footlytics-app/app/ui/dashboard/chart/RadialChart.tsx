"use client";
import { useState, useCallback, useEffect } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Label,
  Sector,
  ResponsiveContainer,
} from "recharts";

const renderActiveShape = (props: any) => {
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
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

const RadialChart = ({ data, page }: { data: any; page: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [font, setFont] = useState(45);

  const handleResize = useCallback(() => {
    if (window.innerWidth < 1700) {
      setFont(35);
    } else {
      setFont(45);
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
      } bg-bgPrimary p-[20px] rounded-[10px]`}
    >
      <h2 className="font-poppins text-textPrimary mb-[20px] text-[20px]">
        Average Rating
      </h2>
      <ResponsiveContainer width={"100%"} height={"80%"}>
        <PieChart width={370} height={400}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            startAngle={180}
            endAngle={0}
            outerRadius="80%"
            innerRadius="60%"
            data={data}
            dataKey="rating"
            labelLine={false}
            cy="70%"
          >
            <Cell fill="#990099" />
            <Cell fill="gray" />

            {/* Central label */}
            <Label
              value={data[0].rating * 10}
              position="center"
              fill="#FFFFFF"
              fontSize={font}
              fontWeight="bold"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialChart;
