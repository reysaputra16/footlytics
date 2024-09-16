const PerformanceCard = () => {
  const performanceStats = [
    {
      date: "22.08",
      rating: 7.52,
    },
    {
      date: "25.08",
      rating: 8.51,
    },
  ];
  return (
    <div className="flex flex-col w-full h-full border-slate-500 border p-4 rounded-lg bg-cardColor">
      <div className="flex p-4 justify-between">
        <h1 className="flex justify-center items-center text-lg">
          Performance
        </h1>
      </div>
      {/* Bar Graph */}
      <div className="relative w-full h-[210px] max-w-4xl">
        {/* Y Axis */}
        <svg
          viewBox="0 0 50 260"
          className="absolute left-[8px] top-0 h-[260px]"
        >
          <polyline
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            points="25,0 25,260"
          />
          <polyline
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            points="20,10 30,10"
          />
          <text x={0} y={15} fontSize={15} fill="#FFFFFF">
            10
          </text>
        </svg>
        {/* X Axis */}
        <svg
          viewBox="0 0 900 50"
          className="absolute left-0 -bottom-[75px] h-[50px]"
        >
          <polyline
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            points="32,25 795,25"
          />
        </svg>
      </div>
    </div>
  );
};

export default PerformanceCard;
