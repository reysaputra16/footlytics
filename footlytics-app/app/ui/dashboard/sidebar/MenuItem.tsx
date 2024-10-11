"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MenuItem = ({ item }: { item: any }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link
      href={item.path}
      className={`flex justify-center items-center p-[20px] gap-[10px] my-[5px] mx-0 rounded-[10px] ${
        pathname === item.path ? "bg-bgSecondary" : ""
      }`}
    >
      <div className="flex flex-row gap-[10px] text-textSecondary transition-colors hover:text-textPrimary">
        {item.icon}
      </div>
    </Link>
  );
};

export default MenuItem;
