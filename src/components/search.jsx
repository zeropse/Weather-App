import { useState } from "react";
import weatherSearch from "../utils/weather_search";

const Search = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setError("Please enter a city name.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const data = await weatherSearch(search);
      setWeather(data);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      console.error("Error fetching weather data:", err.message);
    } finally {
      setLoading(false);
      setSearch("");
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
            rel="noopener noreferrer"
          >
            Live
          </a>{" "}
          Weather Forecast.
        </p>
      </div>
      <form
        className="flex items-center mt-10 gap-2"
        onSubmit={handleSearch} // Attach onSubmit to the form
      >
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-md cursor-pointer w-full text-black bg-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#000000] text-white p-2 rounded-md cursor-pointer"
        >
          Search
        </button>
      </form>
      <div className="mt-10 flex flex-col items-center justify-center">
        {loading && <p>Loading...</p>}
        {error && (
          <p className="text-red-600 text-lg bg-gray-300 p-2 rounded-md">
            {error}
          </p>
        )}
        {weather && (
          <>
            <p className="text-lg font-bold">{weather.name}</p>
            <p>{Math.round(weather.main.temp - 273.15)}°C</p>
            <p>{weather.weather[0].description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
