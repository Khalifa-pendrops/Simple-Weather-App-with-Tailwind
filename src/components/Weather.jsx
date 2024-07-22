import React, { useState, useEffect } from "react";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const apiKey = "393ec15437d643a3ac3164424241907";

  const handleWeather = () => {
    if (city.trim() === "") {
      setError("Please enter a city name.");
      setWeatherData(null);
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.location) {
          setWeatherData(data);
          setError("");
        } else {
          setError("City not found. Please try again.");
          setWeatherData(null);
        }
      })
      .catch((error) => {
        console.log("Failed to fetch weather data:", error);
        setError("An error occurred. Please try again.");
        setWeatherData(null);
      });
       setCity(" ");
  };

    return (
      <div className="relative w-full h-screen flex flex-col justify-center items-center">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/weathervideo.gif"
          type="image/gif"
        />
        <h1 className="absolute z-50 top-[35%] uppercase font-extrabold text-yellow-400 w-[50%] border-none bg-gray-700 text-center">
          Khalifa's Simple Weather App
        </h1>
        <main className="absolute z-10 flex gap-4 justify-center items-center bg-gray-100 bg-opacity-40 h-[20rem] p-6 w-[50%] rounded-md">
          <div className="flex gap-4 justify-center items-center">
            <input
              className="border-none placeholder:text-customText3 px-1 py-[.4rem] bg-gray-200 rounded-sm caret-red-500 w-full h-full sm:h-auto"
              type="text"
              id="cityInput"
              name="city"
              value={city}
              placeholder="Enter city name here..."
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button
            onClick={handleWeather}
            className="font-bold bg-blue-700 text-white px-4 py-2 rounded-sm cursor-pointer"
          >
            Get Weather
          </button>
        </main>
        <div id="weatherData" className="absolute bottom-8">
          {error && <p>{error}</p>}
          {weatherData && (
            <>
              <h2 className="font-bold text-2xl">
                {weatherData.location.name}
              </h2>
              <p className="italic text-sm">
                {weatherData.current.condition.text}
              </p>
              <p className="italic text-xl">
                Temperature:{" "}
                <span className="text-amber-700 font-semibold">
                  {weatherData.current.temp_c}&deg;C
                </span>
              </p>
              <p className="italic text-xl">
                Humidity:{" "}
                <span className="text-green-900 font-semibold">
                  {weatherData.current.humidity}%
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    );
}

export default Weather;
