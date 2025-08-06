import React, { useState, useEffect } from "react";
import { LiaCloudShowersHeavySolid } from "react-icons/lia";
import { CiCloudOn, CiCloudSun } from "react-icons/ci";
import { BsCloudsFill } from "react-icons/bs";
import { PiCloudSnowDuotone } from "react-icons/pi";
import { BsCloudSleetFill } from "react-icons/bs";
import { BsCloudRainFill } from "react-icons/bs";
import { IoThunderstorm } from "react-icons/io5";
import { GiSnowflake1 } from "react-icons/gi";
//import { WiDegrees } from "react-icons/wi";

const HomePage = () => {
  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState(<CiCloudOn />);
  const city = window.location.search
    ? window.location.search.split("=")[1].replaceAll("%20", " ")
    : "New Delhi";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9d3b99449d168775897a329d279018e&units=metric`
      );
      const result = await response.json();
      console.log(result);
      if (result.cod === 200) {
        setWeather(result);
        updateWeatherIcon(result.weather[0].description);
      } else {
        setWeather(null);
      }
    } catch (error) {
      console.log("Error fetching weather data:", error);
      setWeather(null);
    }
  };
  const updateWeatherIcon = (description) => {
    const iconsMap = {
      "broken clouds": <LiaCloudShowersHeavySolid />,
      "clear sky": <CiCloudSun />,
      "few clouds": <BsCloudsFill />,
      "scattered clouds": <PiCloudSnowDuotone />,
      "shower rain": <BsCloudSleetFill />,
      rain: <BsCloudRainFill />,
      thunderstorm: <IoThunderstorm />,
      snow: <GiSnowflake1 />,
    };
    setIcon(iconsMap[description] || <CiCloudOn />);
  };
  const fetchCurrentLocationWeather = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=d9d3b99449d168775897a329d279018e&units=metric`
        );
        const result = await response.json();
        if (result.cod === 200) {
          setWeather(result);
          updateWeatherIcon(result.weather[0].description);
        } else {
          setWeather(null);
        }
      } catch (error) {
        console.error("Error fetching current location weather:", error);
        setWeather(null);
      }
    });
  };
  useEffect(() => {
    if (window.location.search) {
      fetchWeatherData();
    } else {
      fetchCurrentLocationWeather();
    }
  }, []);
  return (
    <div className="py-5 w-100 text-white  ">
      {weather ? (
        <div className="w-100 gap-md-5 d-flex justify-content-center ">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ lineHeight: "7rem" }}
          >
            <p
              style={{ fontSize: "4rem", color: "#FFFFFF", textWrap: "nowrap" }}
              className="ps-5 pt-3 fw-bold "
            >
              {weather.name}
            </p>
            <p className="ps-5" style={{ fontSize: "7rem" }}>
              {icon}
            </p>
          </div>
          <div className="w-50 d-flex align-items-end justify-content-center flex-column pt-4">
            <p className="fs-4 pe-5 pe-sm-3 text-nowrap">
              {new Date().toDateString()}
            </p>
            <h1
              className="pe-5 pe-sm-3 text-nowrap"
              style={{ fontSize: "4.5rem" }}
            >
              {Math.floor(weather.main.temp)}
              <sup>&deg;c</sup>
            </h1>
            <div className=" w-100 pt-2 d-flex flex-column align-items-end pe-5 pe-sm-3">
              <p className="text-nowrap">
                Wind Speed : {weather.wind.speed} m/s
              </p>
              <p className="text-nowrap">
                {" "}
                Sky : {weather.weather[0].description}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-danger d-flex justify-content-center align-items-center">
          City Not Found
        </h1>
      )}
    </div>
  );
};

export default HomePage;
