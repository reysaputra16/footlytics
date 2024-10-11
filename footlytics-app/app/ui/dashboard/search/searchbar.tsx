import { Search } from "lucide-react";

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="flex items-center gap-[10px] bg-gray-400 p-[10px] rounded-[10px] w-full">
      <Search />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none text-textPrimary outline-none"
      />
    </div>
  );
};

export default SearchBar;
