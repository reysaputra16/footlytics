interface NextMatch {
  home: string;
  away: string;
  date: string;
  time: string;
  location: string;
}

const NextMatchCard: React.FC<NextMatch> = ({
  home,
  away,
  date,
  time,
  location,
}) => {
  return (
    <div className="flex flex-1 flex-col h-fit w-full border-borderColor border-b-2">
      <div className="flex gap-3 xl:px-[80px] lg:px-[50px] px-[40px] xl:pt-[50px] pt-[30px] pb-[10px]">
        <p className="font-medium xxl:text-[36px] xl:text-[30px] lg:text-[22px] md:text-[17px] text-[13px] font-poppins">
          Next Match
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-3 xl:px-[80px] lg:px-[50px] px-[40px]">
        <p className="font-poppins font-thin xxl:text-[24px] xl:text-[20px] text-[12px]">
          {location}, {date}, {time}
        </p>
        <div className="flex flex-1 flex-row justify-between items-center px-5">
          <img
            src={home}
            alt="Team 1"
            className="xxl:w-28 xxl:h-28 xl:w-16 xl:h-16 lg:w-14 lg:h-14 w-10 h-10"
          />
          <p className="font-poppins xxl:text-2xl xl:text-xl lg:text-lg text-base">
            VS
          </p>
          <img
            src={away}
            alt="Team 2"
            className="xxl:w-28 xxl:h-28 xl:w-16 xl:h-16 lg:w-14 lg:h-14 w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default NextMatchCard;
