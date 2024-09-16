const MatchCards = () => (
  <div className="flex justify-center items-center w-full h-[400px] border-slate-500 border rounded-lg bg-cardColor">
    <div className="grid grid-row-2 h-full justify-center items-center">
      <div className="flex flex-row gap-2">
        {/* Left Arrow */}
        <div className="flex justify-center items-center">
          <svg
            width={50}
            height={50}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Circle */}
            <circle
              cx={50}
              cy={50}
              r={40}
              stroke="#FFFFFF"
              strokeWidth={3}
              fill="none"
            />
            {/* Arrow */}
            <polyline
              points="60,30 40,50 60,70"
              stroke="#FFFFFF"
              strokeWidth={3}
              fill="none"
            />
          </svg>
        </div>
        {/* Match Cards */}
        <div className="flex w-[600px] h-[300px] justify-center items-center border-slate-100 border-4">
          <p>The Match Cards</p>
        </div>
        {/* Right Arrow */}
        <div className="flex justify-center items-center">
          <svg
            width={50}
            height={50}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Circle */}
            <circle
              cx={50}
              cy={50}
              r={40}
              stroke="#FFFFFF"
              strokeWidth={3}
              fill="none"
            />
            {/* Arrow */}
            <polyline
              points="40,30 60,50 40,70"
              stroke="#FFFFFF"
              strokeWidth={3}
              fill="none"
            />
          </svg>
        </div>
      </div>
      <p className="text-center">Win/Loss Stats</p>
    </div>
  </div>
);

export default MatchCards;
