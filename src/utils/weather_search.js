const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

if (!apiKey) {
  throw new Error(
    "API key is missing. Please set VITE_OPEN_WEATHER_API_KEY in your .env file."
  );
}

const weatherSearch = async (city) => {
  if (!city) {
    throw new Error("City name is required.");
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch weather data.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    throw new Error(
      error.message ||
        "An unexpected error occurred while fetching weather data."
    );
  }
};

export default weatherSearch;
