import {
  ChartLine,
  LayoutDashboard,
  LogOut,
  Menu,
  UserRoundSearch,
} from "lucide-react";
import Image from "next/image";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    title: "Analysis",
    path: "/dashboard/analysis",
    icon: <ChartLine />,
  },
  {
    title: "Player Search",
    path: "/dashboard/player-search",
    icon: <UserRoundSearch />,
  },
];

const Sidebar = () => {
  return (
    <div className="top-[40px]">
      <div className="fixed flex flex-col justify-center gap-[20px] mb-[20px]">
        <Image
          className="rounded-full object-cover"
          src="/profile.svg"
          alt="Profile Icon"
          width={50}
          height={50}
        />
        {menuItems.map((page) => (
          <MenuItem item={page} key={page.title} />
        ))}
        <button className="flex items-center p-[20px] my-[5px] mx-0 gap-[10px] cursor-pointer rounded-[10px] bg-none border-none w-full text-textSecondary transition-colors hover:text-textPrimary ">
          <LogOut />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
