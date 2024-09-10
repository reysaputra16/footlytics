import Link from "next/link";

const sidebar = () => {
  return (
    <div className="flex flex-col xxl:w-[100px] xl:w-[75px] w-[60px] bg-secondary">
      <div className="flex flex-1 flex-col items-center px-5 py-5">
        <Link href="/">
          <img
            src="/temporary-logo.svg"
            alt="Overview Icon"
            className="xl:w-12 w-10 xl:h-12 h-10 hover:cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center xxl:gap-20 xl:gap-16 gap-12 px-3 py-3">
        <div className="hover:cursor-pointer hover:bg-borderColor hover:duration-300 active:bg-borderColor rounded-lg w-full justify-center items-center flex">
          <img
            src="/overview.svg"
            alt="Overview Icon"
            className="xl:w-12 w-10 xl:h-12 h-10"
          />
        </div>
        <div className="hover:cursor-pointer hover:bg-borderColor hover:duration-300 rounded-lg w-full justify-center items-center flex">
          <img
            src="/analysis.svg"
            alt="Overview Icon"
            className="xl:w-12 w-10 xl:h-12 h-10"
          />
        </div>
        <div className="hover:cursor-pointer hover:bg-borderColor hover:duration-300 rounded-lg w-full justify-center items-center flex">
          <img
            src="/search.svg"
            alt="Overview Icon"
            className="xl:w-12 w-10 xl:h-12 h-10"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-end items-center px-5 py-5">
        <div className="hover:cursor-pointer">
          <img
            src="/profile.svg"
            alt="Profile Icon"
            className="xl:w-12 w-10 xl:h-12 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default sidebar;
