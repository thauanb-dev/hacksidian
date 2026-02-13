"use client";
import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchHeader() {
  const [searchState, setSearchState] = useState(false);
  const handleSearchClick = (e:React.MouseEvent<SVGSVGElement>) => {
    console.log(e);
    // alert("clicado");
    setSearchState((prev) => (prev === false ? true : false));
  };
  return (
    <div className="ml-auto w-full max-w-sm flex px-3 py-2 items-center gap-2">
      <Search className="cursor-pointer" onClick={handleSearchClick} />
      {searchState && (
        <input
          className="w-full rounded-lg px-4 border border-white/10 bg-white/5  text-sm text-slate-200 placeholder:text-slate-400 outline-none 
          focus:border-blue-700
          focus:border-2"
          placeholder="Search page or heading..."
        />
      )}
    </div>
  );
}
