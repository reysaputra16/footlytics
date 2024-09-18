import CircularStat from "./CircularStat";

const LastMatchReport = () => {
  return (
    <div className="flex flex-col w-full h-full border-slate-500 border p-4 rounded-lg bg-cardColor">
      <div className="flex p-4 justify-between">
        <h1 className="flex justify-center items-center text-[21px]">
          Match Report
        </h1>
      </div>
      <div className="flex p-4 justify-between">
        <h2>Man City vs Arsenal: Etihad Stadium, 28.05.2024</h2>
      </div>
      <div className="grid grid-cols-4 justify-center items-center w-full h-full gap-3">
        <CircularStat
          contribution={1}
          total={3}
          statName="Goals"
          progressColor="stroke-green-600"
        />
        <CircularStat
          contribution={1}
          total={2}
          statName="Assists"
          progressColor="stroke-blue-600"
        />
        <CircularStat
          contribution={1}
          total={1}
          statName="Clean Sheets"
          progressColor="stroke-violet-600"
        />
        <CircularStat
          contribution={7.5}
          total={10}
          statName="Rating"
          progressColor="stroke-amber-600"
        />
      </div>
    </div>
  );
};

export default LastMatchReport;
