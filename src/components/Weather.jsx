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
    <div className="bg-gray-300  h-[100vh] flex flex-col items-center justify-center gap-6 p-8 sm:h-[50vh] w-[100%] ">
      <h1 className="uppercase font-extrabold text-gray-600">
        Khalifa's Simple Weather App
      </h1>
      <main className="flex flex-col gap-4 justify-center items-center bg-gray-600 h-[20rem] p-6 w-[100%]">
        <div className="flex gap-4 justify-center items-center">
          <p className="text-sm font-semibold text-gray-300 sm:text-xl">
            Enter a city name to get weather:
          </p>
          <input
            className="border-none placeholder:text-customText3 px-1 py-[.4rem] rounded-sm caret-red-500 w-[100%] h-[50%]  sm:h-[100%]"
            type="text"
            id="cityInput"
            name="city"
            value={city}
            placeholder="Enter city name here..."
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>
        <button
          onClick={handleWeather}
          className="font-bold bg-blue-700 text-white px-[1rem] py-[.4rem] rounded-sm cursor-pointer"
        >
          Get Weather
        </button>
      </main>
      <div id="weatherData">
        {error && <p>{error}</p>}
        {weatherData && (
          <>
            <h2 className="font-bold text-2xl">{weatherData.location.name}</h2>
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
