"use client";
import { useState } from "react";
import { Sidebar, Search, SearchList } from "../../components";

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    //Access the search value when Enter is pressed
    console.log(value);
    setSearchValue(value);
  };

  return (
    <main className="flex flex-row">
      <Sidebar active="search" />
      <Search onSearch={handleSearch} />
      <SearchList searchValue={searchValue} />
    </main>
  );
}
