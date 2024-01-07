import React from "react";
import { useState } from "react";
import Hero from "./components/Hero";
import useWeather from "../hooks/useWeather";
import { humidity, cold, hot, windSpeed } from "../assets";


const Search = () => {
  let [city, setCity] = useState("");

  const holdValue = (e) => {
    city = e.target.value;
  };

  const showValue = (e) => {
    e.preventDefault();
    setCity(city);
  };

  const data = useWeather(city);

  let src = ""
  if (data.temp <25) {
    src = cold
  }
  else{
    src = hot
  }


  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="search city"
          id="input"
          onChange={holdValue}
          className="rounded-lg py-2 px-4"
        />

        <button
          type="button"
          onClick={showValue}
          className="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white w-full transition ease-in duration-200 text-center text-base rounded-xl font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          Search
        </button>
      </div>

      <div className="flex flex-col h-full justify-around py-7 px-4 font-Pacifico">
        <h1 className="text-[40px]">{data.temp ?
         <div>
          <div className="flex gap-2">
          <img src={src} width={54} alt="" />
          <h2 className="text-[45px]">{data.temp} °C</h2>
          </div>
          <p className="text-center text-xl">Temperature</p>
        
        </div> : 
        ``}</h1>
        <h1>
          {data.humidity ? (
            <div>
              <div className="flex gap-2">
                <img src={humidity} width={44} alt="" />
                <h2 className="text-[35px]">{data.humidity} %</h2>
              </div>

              <p className="text-center">Humidity</p>
            </div>
          ) : (
            ``
          )}
        </h1>
        <h1>
          {data.wind_speed ? (
            <div>
              <div className="flex gap-2">
                <img src={windSpeed} width={44} alt="" />
                <h2 className="text-[35px]">{data.wind_speed} m/s</h2>
              </div>

              <p className="text-center">Wind Speed</p>
            </div>
          ) : (
            ``
          )}
        </h1>

      </div>
     
    </>
  );
};

export default Search;
