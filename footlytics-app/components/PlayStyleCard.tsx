interface PlayStatCardProps {
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defense: number;
  physical: number;
}

const Polygon: React.FC<PlayStatCardProps> = ({
  pace,
  shooting,
  passing,
  dribbling,
  defense,
  physical,
}) => {
  const physicalx = (50 - (physical / 100) * 42.5).toString();
  const physicaly = (50 - (physical / 100) * 25).toString();
  const pacex = (50).toString();
  const pacey = (50 - (pace / 100) * 49).toString();
  const shootingx = (50 + (shooting / 100) * 42.5).toString();
  const shootingy = (50 - (shooting / 100) * 25).toString();
  const passingx = (50 + (passing / 100) * 42.5).toString();
  const passingy = (50 + (passing / 100) * 25).toString();
  const dribblingx = (50).toString();
  const dribblingy = (50 + (dribbling / 100) * 49).toString();
  const defensex = (50 - (defense / 100) * 42.5).toString();
  const defensey = (50 + (defense / 100) * 25).toString();

  const points = [
    physicalx + "% " + physicaly + "%",
    pacex + "% " + pacey + "%",
    shootingx + "% " + shootingy + "%",
    passingx + "% " + passingy + "%",
    dribblingx + "% " + dribblingy + "%",
    defensex + "% " + defensey + "%",
  ];

  const clipPath = `polygon(${points.join(", ")})`;

  return (
    <div>
      <div
        className="absolute inset-0 justify-center items-center lg:max-h-[150px] max-h-[110px] lg:max-w-[150px] max-w-[110px]]"
        style={{
          clipPath,
          background: "rgba(66, 153, 225, 0.6)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(2)",
        }}
      ></div>
    </div>
  );
};

const PlayStyleCard: React.FC<PlayStatCardProps> = ({
  pace,
  shooting,
  passing,
  dribbling,
  defense,
  physical,
}) => {
  return (
    <div
      className={`flex flex-1 flex-col w-full border-slate-500 border rounded-lg bg-cardColor`}
    >
      <div className={`flex gap-3 lg:px-[50px] px-[40px] pt-[30px] pb-[10px]`}>
        <p className="lg:text-lg text-[13px] font-poppins">Playing Style</p>
      </div>
      <div className="relative flex flex-1 justify-center items-center">
        <div
          className={`absolute w-[2px] lg:h-[180px] h-[110px] bg-[#525151] origin-center transform rotate-[0deg]`}
        >
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[150%] lg:text-[16px] text-[13px] text-center font-poppins">
            Pace
          </p>
        </div>
        <div
          className={`absolute w-[2px] lg:h-[180px] h-[110px] bg-[#525151] origin-center transform rotate-[60deg]`}
        >
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[150%] lg:text-[16px] text-[13px] text-center font-poppins">
            Shooting
          </p>
        </div>
        <div
          className={`absolute w-[2px] lg:h-[180px] h-[110px] bg-[#525151] origin-center transform rotate-[120deg]`}
        >
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[150%] rotate-180 lg:text-[16px] text-[13px] text-center font-poppins">
            Passing
          </p>
        </div>
        <div
          className={`absolute w-[2px] lg:h-[180px] h-[110px] bg-[#525151] origin-center transform rotate-[180deg]`}
        >
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[150%] rotate-180 lg:text-[16px] text-[13px] text-center font-poppins">
            Dribbling
          </p>
        </div>
        <div
          className={`absolute w-[2px] lg:h-[180px] h-[110px] bg-[#525151] origin-center transform rotate-[240deg]`}
        >
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[150%] rotate-180 lg:text-[16px] text-[13px] text-center font-poppins">
            Defense
          </p>
        </div>
        <div
          className={`absolute w-[2px] lg:h-[180px] h-[110px] bg-[#525151] origin-center transform rotate-[300deg]`}
        >
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[150%] lg:text-[16px] text-[13px] text-center font-poppins">
            Physical
          </p>
        </div>

        <div
          className={`relative flex lg:h-[180px] h-[110px] lg:w-[180px] w-[110px] border-[#525151] border-2 rounded-[50%] justify-center items-center`}
        >
          <div className="flex h-3/4 w-3/4 border-[#525151] border-2 rounded-[50%] justify-center items-center">
            <div className="flex h-2/3 w-2/3 border-[#525151] border-2 rounded-[50%] justify-center items-center">
              <div
                className={`flex h-[15px] w-[15px] bg-[#525151] rounded-[50%] justify-center items-center`}
              ></div>
            </div>
          </div>
          <Polygon
            pace={pace}
            shooting={shooting}
            passing={passing}
            dribbling={dribbling}
            defense={defense}
            physical={physical}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayStyleCard;
