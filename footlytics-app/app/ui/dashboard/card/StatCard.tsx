import { Aperture, Gauge, Goal } from "lucide-react";

const StatCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <div
      className={`flex bg-gradient-to-r from-[#041533] to-[#1D2D49] p-[20px] rounded-[10px] gap-[20px] w-full cursor-pointer`}
    >
      {title === "Goals" ? <Aperture width={40} height={40} /> : ""}
      {title === "Assists" ? <Goal width={40} height={40} /> : ""}
      {title === "Average Speed" ? <Gauge width={40} height={40} /> : ""}
      <div className="flex flex-col gap-[20px]">
        <span className="font-poppins text-[30px]">{title}</span>
        <span className="font-poppins font-medium text-[24px]">{value}</span>
      </div>
    </div>
  );
};
3;

export default StatCard;
