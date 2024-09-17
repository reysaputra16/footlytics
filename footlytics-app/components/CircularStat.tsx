const CircularStat = ({
  contribution,
  total,
  statName,
  progressColor,
}: {
  contribution: number;
  total: number;
  statName: string;
  progressColor: string;
}) => {
  const radius = 20;
  const cx = 25;
  const cy = 25;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="flex flex-col gap-7 justify-center items-center h-full w-full">
      <h1 className="font-poppins">{statName}</h1>
      <svg
        width={150}
        height={150}
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle (empty part) */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          className="stroke-gray-300"
          strokeWidth={3}
        />
        {/* Circle representing the filled percentage */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          className={`${progressColor}`}
          strokeWidth={3}
          strokeDasharray={circumference}
          strokeDashoffset={
            circumference - (contribution / total) * circumference
          }
          strokeLinecap="round"
          transform="rotate(-90 25 25)"
        />
        {/* Percentage text in the middle of the circle */}
        <text
          x={25}
          y={28}
          fontSize={8}
          className="fill-gray-300"
          textAnchor="middle"
        >
          {contribution} / {total}
        </text>
      </svg>
    </div>
  );
};

export default CircularStat;
