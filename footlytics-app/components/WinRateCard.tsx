interface Progress {
  progress: number;
}

const ProgressBar: React.FC<Progress> = ({ progress }) => (
  <div className="relative w-full">
    {/* Progress Bar Container */}
    <div className="flex items-center">
      <span className="xl:text-xl lg:text-lg text-sm text-gray-500 mr-2">
        0
      </span>
      <div className="flex-1 xl:h-4 lg:h-2 h-1 bg-borderColor rounded-lg relative">
        {/* Progress Bar */}
        <div
          className="h-full bg-white rounded-lg transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
        {/* Progress Percentage */}
        <span
          className="absolute xl:text-xl lg:text-lg text-sm text-white transition-all duration-1000"
          style={{
            left: `${progress}%`,
            transform: `translate(-50%, -170%)`,
          }}
        >
          {progress}%
        </span>
      </div>
      <span className="xl:text-xl lg:text-lg text-sm text-gray-500 ml-2">
        100
      </span>
    </div>
  </div>
);

const WinRateCard: React.FC<Progress> = ({ progress }) => {
  return (
    <div className={`flex flex-1 flex-col h-fit w-full`}>
      <div
        className={`flex gap-3 xl:px-[80px] lg:px-[50px] px-[40px] xl:pt-[50px] pt-[30px] pb-[10px]`}
      >
        <p className="font-medium xxl:text-[36px] xl:text-[30px] lg:text-[22px] md:text-[17px] text-[13px] font-poppins">
          Win Rate
        </p>
      </div>
      <div className="flex flex-1 xl:px-[80px] lg:px-[50px] px-[40px] justify-center items-center">
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default WinRateCard;
