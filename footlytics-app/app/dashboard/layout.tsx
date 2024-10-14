import Footer from "../ui/dashboard/footer/Footer";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Footlytics",
  description: "Footlytics Dashboard",
};

const layout = ({ children }: { children: any }) => {
  return (
    <div className="flex flex-row">
      <div className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col bg-bgPrimary border-r border-bgSecondary sm:flex">
        <Sidebar />
      </div>
      <div className="flex flex-col items-center w-full p-[20px] sm:ml-14">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
