// Define the prop types using an interface or a type alias
interface SmallStatCardProps {
  title: string;
  unit: string;
  value: string; // Adjust the type based on your needs
  borderSettings?: string; // Optional, if card requires more adjustments on border
}

const SmallStatCard: React.FC<SmallStatCardProps> = ({
  title,
  unit,
  value,
  borderSettings,
}) => (
  <div className={`flex flex-1 flex-col h-fit w-full ${borderSettings}`}>
    <div
      className={`flex gap-3 xl:px-[80px] lg:px-[50px] px-[40px] xl:pt-[50px] pt-[30px] pb-[10px]`}
    >
      <p className="font-medium xxl:text-[36px] xl:text-[30px] lg:text-[22px] md:text-[17px] text-[13px] font-poppins">
        {title}
      </p>
    </div>
    <div
      className={`flex flex-row xl:px-[80px] lg:px-[65px] px-[50px] py-8 gap-3`}
    >
      <p className="flex-1 xl:text-[70px] lg:text-[50px] md:text-[40px] text-[30px] font-normal font-poppins italic">
        {value}
      </p>
      <p className="flex flex-1 justify-center items-center font-poppins xl:text-[40px] lg:text-[30px] md:text-[25px] text-[16px]">
        {unit}
      </p>
    </div>
  </div>
);

export default SmallStatCard;
