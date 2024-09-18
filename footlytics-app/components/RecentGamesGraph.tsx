const RecentGamesGraph = () => {
  const last5Games = ["22.08", "27.08", "28.08", "30.08", "31.08"];
  return (
    <div className="flex flex-col w-full h-full border-slate-500 border rounded-lg p-4 bg-cardColor">
      <div className="flex p-4 justify-between">
        <h1 className="flex justify-center items-center text-[21px]">
          Recent Games
        </h1>
        <div className="flex flex-row gap-3">
          {/* Last 5 Matches component */}
          <div className="flex flex-row gap-2 hover:border-slate-100 hover:cursor-pointer border-slate-500 border rounded-lg p-3">
            <p className="text-md">Last 5 Matches</p>
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                className="h-6 w-6"
              >
                <polygon points="50,60 25,25 75,25" fill="currentColor" />
              </svg>
            </div>
          </div>
          {/* Category Component */}
          <div className="flex flex-row justify-center gap-2 hover:border-slate-100 hover:cursor-pointer border-slate-500 border rounded-lg p-3">
            <p className="text-md">Goals</p>
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                className="h-6 w-6"
              >
                <polygon points="50,60 25,25 75,25" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Graph */}
      <div className="flex flex-col items-center justify-center w-full p-8">
        {/* Graph: X and Y axis container */}
        <div className="relative w-full h-[210px] max-w-4xl">
          {/* Graph: Y axis */}
          <svg
            viewBox="0 0 50 205"
            className="absolute -left-4 top-0 h-[205px]"
          >
            {/* Graph: Y axis labels */}
            <text
              x={40}
              y={33.33}
              fontSize={15}
              fill="#FFFFFF"
              textAnchor="end"
            >
              5
            </text>
            <text x={40} y={100} fontSize={15} fill="#FFFFFF" textAnchor="end">
              3
            </text>
            <text
              x={40}
              y={166.66}
              fontSize={15}
              fill="#FFFFFF"
              textAnchor="end"
            >
              1
            </text>
            <polyline
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="4"
              points="50,0 50,197"
            />
          </svg>
          {/* Graph: X axis */}
          <svg
            viewBox="0 0 900 50"
            className="absolute left-0 top-[197px] h-[50px]"
          >
            <polyline
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="4"
              points="32,0 795,0"
            />
            {/* Graph: X axis labels */}
            {last5Games.map((game, index) => (
              <text
                key={index}
                x={55 + 190 * index}
                y={20}
                fontSize={15}
                fill="#FFFFFF"
                textAnchor="end"
              >
                {game}
              </text>
            ))}
          </svg>

          {/* Line Graph */}
          <svg
            viewBox="0 0 760 200"
            className="absolute left-9 -top-1 h-[200px]"
          >
            {/* Lines for guidance in graph */}
            <polyline
              fill="none"
              stroke="#525151"
              strokeWidth="2"
              points="0,166.66 760,166.66"
            />
            <polyline
              fill="none"
              stroke="#525151"
              strokeWidth="2"
              points="0,133.33 760,133.33"
            />
            <polyline
              fill="none"
              stroke="#525151"
              strokeWidth="2"
              points="0,100 760,100"
            />
            <polyline
              fill="none"
              stroke="#525151"
              strokeWidth="2"
              points="0,66.66 760,66.66"
            />
            <polyline
              fill="none"
              stroke="#525151"
              strokeWidth="2"
              points="0,33.33 760,33.33"
            />
            {/* Area under the curve */}
            <polygon
              fill="rgba(66, 153, 225, 0.4)"
              points="0,200 190,133.3 380,133.3 570,166.6 760,100 760,200"
            />
            {/* Line path */}
            <polyline
              fill="none"
              stroke="#4299E1"
              strokeWidth="3"
              points="0,200 190,133.3 380,133.3 570,166.6 760,100"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RecentGamesGraph;
