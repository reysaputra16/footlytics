const PlayerStats = ({ data, page }: { data: any; page: string }) => {
  return (
    <div
      className={`${
        page === "user" ? "w-[25%]" : "w-[25%]"
      } bg-bgPrimary rounded-[10px] p-[20px]`}
    >
      <div className="flex flex-col gap-[20px] justify-center">
        <h2 className="font-poppins text-textPrimary mb-[10px] text-[20px]">
          Player Stats
        </h2>
        <table className="w-full text-[14px]">
          <thead>
            <tr>
              <td className="py-[10px] font-bold">Matches</td>
            </tr>
          </thead>
          <tbody>
            <tr className="flex justify-between">
              <td className="py-[10px]">Games Played</td>
              <td className="py-[10px]">..value..</td>
            </tr>
            <tr className="flex justify-between">
              <td className="py-[10px]">Total Minutes Played</td>
              <td className="py-[10px]">..value..</td>
            </tr>
          </tbody>
        </table>
        <table className="w-full text-[14px]">
          <thead>
            <tr>
              <td className="py-[10px] font-bold">Attacking</td>
            </tr>
          </thead>
          <tbody>
            <tr className="flex justify-between">
              <td className="py-[10px]">Goals</td>
              <td className="py-[10px]">..value..</td>
            </tr>
            <tr className="flex justify-between">
              <td className="py-[10px]">Shots per Game</td>
              <td className="py-[10px]">..value..</td>
            </tr>
            <tr className="flex justify-between">
              <td className="py-[10px]">Shots on Target per Game</td>
              <td className="py-[10px]">..value..</td>
            </tr>
            <tr className="flex justify-between">
              <td className="py-[10px]">Penalty Goals</td>
              <td className="py-[10px]">..value..</td>
            </tr>
            <tr className="flex justify-between">
              <td className="py-[10px]">Left Foot Goals</td>
              <td className="py-[10px]">..value..</td>
            </tr>
            <tr className="flex justify-between">
              <td className="py-[10px]">Right Foot Goals</td>
              <td className="py-[10px]">..value..</td>
            </tr>
          </tbody>
        </table>
        <table className="w-full text-[14px]">
          <thead>
            <tr>
              <td className="py-[10px] font-bold">Defending</td>
            </tr>
          </thead>
          <tbody>
            <tr className="flex justify-between">
              <td className="py-[10px]">Interceptions per Game</td>
              <td className="py-[10px]">..value..</td>
            </tr>
            <tr className="flex justify-between">
              <td className="py-[10px]">Tackles per Game</td>
              <td className="py-[10px]">..value..</td>
            </tr>
            <tr className="flex justify-between">
              <td className="py-[10px]">Balls Recovered per Game</td>
              <td className="py-[10px]">..value..</td>
            </tr>
            <tr className="flex justify-between">
              <td className="py-[10px]">Dribbled Past per Game</td>
              <td className="py-[10px]">..value..</td>
            </tr>
            <tr className="flex justify-between">
              <td className="py-[10px]">Clearances per Game</td>
              <td className="py-[10px]">..value..</td>
            </tr>
          </tbody>
        </table>
        <table className="w-full text-[14px]">
          <thead>
            <tr>
              <td className="py-[10px] font-bold">Others</td>
            </tr>
          </thead>
          <tbody>
            <tr className="flex justify-between">
              <td className="py-[10px]">Possession Lost</td>
              <td className="py-[10px]">..value..</td>
            </tr>
            <tr className="flex justify-between">
              <td className="py-[10px]">Duels Won</td>
              <td className="py-[10px]">..value..</td>
            </tr>
            <tr className="flex justify-between">
              <td className="py-[10px]">Fouls</td>
              <td className="py-[10px]">..value..</td>
            </tr>
          </tbody>
        </table>
        <table className="w-full text-[14px]">
          <thead>
            <tr>
              <td className="py-[10px] font-bold">Cards</td>
            </tr>
          </thead>
          <tbody>
            <tr className="flex justify-between">
              <td className="py-[10px]">Yellow</td>
              <td className="py-[10px]">..value..</td>
            </tr>
            <tr className="flex justify-between">
              <td className="py-[10px]">Yellow-Red</td>
              <td className="py-[10px]">..value..</td>
            </tr>
            <tr className="flex justify-between">
              <td className="py-[10px]">Red</td>
              <td className="py-[10px]">..value..</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerStats;
