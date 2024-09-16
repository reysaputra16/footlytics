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
}) => (
  <div className="flex justify-center items-center w-full h-full border-slate-500 border rounded-lg bg-cardColor">
    <div
      className={`flex flex-1 flex-col h-fit w-full justify-center items-center gap-10`}
    >
      <p className="lg:text-lg text-[13px] font-poppins">{title}</p>
      <div className={`grid grid-cols-2 gap-3`}>
        <p className="flex justify-center items-center lg:text-[40px] text-[30px] font-normal font-poppins">
          {value}
        </p>
        <p className="flex justify-end items-center font-poppins lg:text-[20px] text-[12px] w-[100px]">
          {unit}
        </p>
      </div>
    </div>
  </div>
);

export default SmallStatCard;
