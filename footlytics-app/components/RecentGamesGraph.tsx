const RecentGamesGraph = () => {
  return (
    <div className="flex flex-col w-full h-full border-slate-200 border-2 rounded-lg p-4 bg-cardColor">
      <div className="flex p-4 justify-between">
        <h1 className="flex justify-center items-center text-lg">
          Recent Games
        </h1>
        <div className="flex flex-row gap-3">
          {/* Last 5 Matches component */}
          <div className="flex flex-row gap-2 border-slate-200 border-2 rounded-lg p-3">
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
          <div className="flex flex-row justify-center gap-2 border-slate-200 border-2 rounded-lg p-3">
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
          {/* Graph: Y axis labels */}
          <div className="absolute -left-2 -top-3 bottom-0 flex flex-col justify-between h-full px-4 border-r-2">
            <span>5</span>
            <span>4</span>
            <span>3</span>
            <span>2</span>
            <span>1</span>
            <span>{/* 0 but no writing */}</span>
          </div>
          {/* Graph: X axis labels */}
          <div className="absolute -bottom-7 left-8 right-0 flex justify-between w-[95%] mx-auto py-2 border-t-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
          </div>

          {/* Line Graph */}
          <svg
            viewBox="0 0 1000 200"
            className="absolute left-9 -top-1 h-[200px]"
          >
            {/* Area under the curve */}
            <polygon
              fill="rgba(66, 153, 225, 0.4)"
              points="0,200 190,133.3 380,133.3 570,166.6 760,100 760,200 570,200 380,200 190,200"
            />
            {/* Line path */}
            <polyline
              fill="none"
              stroke="#4299E1"
              stroke-width="3"
              points="0,200 190,133.3 380,133.3 570,166.6 760,100"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RecentGamesGraph;
