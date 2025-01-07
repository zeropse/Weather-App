import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex items-center justify-center">
        <p className="text-sm">
          Search for a city to get the{" "}
          <a
            className="font-bold underline"
            href="https://openweathermap.org/"
            target="_blank"
          >
            Live
          </a>{" "}
          Weather Forecast.
        </p>
      </div>
      <form className="flex items-center mt-10 gap-2">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-md cursor-pointer w-full text-black  bg-white"
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onSubmit={handleSearch}
        />
        <button
          className="bg-[#000000] text-white p-2 rounded-md cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
