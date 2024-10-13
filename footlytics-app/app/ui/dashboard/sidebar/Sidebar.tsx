"use client";
import {
  ChartLine,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  UserRoundSearch,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <>
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {menuItems.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`flex w-9 h-9 items-center justify-center rounded-lg text-textSecondary transition-colors hover:text-textPrimary md:h-8 md:w-8 ${
              pathname === item.path ? "bg-bgSecondary" : ""
            }`}
          >
            {item.icon}
          </Link>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/dashboard/settings"
          className={`flex w-9 h-9 items-center justify-center rounded-lg text-textSecondary transition-colors hover:text-textPrimary md:h-8 md:w-8 ${
            pathname === "/dashboard/settings" ? "bg-bgSecondary" : ""
          }`}
        >
          <Settings />
        </Link>
      </nav>
    </>
  );
};

export default Sidebar;
