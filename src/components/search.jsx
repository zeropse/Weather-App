const Search = () => {
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
          className="p-2 rounded-md cursor-pointer"
        />
        <button className="bg-[#000000] text-white p-2 rounded-md cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
