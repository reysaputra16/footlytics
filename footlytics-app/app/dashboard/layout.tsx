import Footer from "../ui/dashboard/footer/Footer";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";

const layout = ({ children }: { children: any }) => {
  return (
    <div className="flex">
      <div className="sticky bg-bgPrimary p-[20px] w-[100px] min-h-[100vh]">
        <Sidebar />
      </div>
      <div className="flex flex-col items-center w-full p-[20px]">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
