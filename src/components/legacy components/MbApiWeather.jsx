import { useEffect, useState } from "react";
import "./MbApiWeather.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// SOON - CREATE PARENT COMPONENTS THAT FEEDS THIS PROPS

export const WeatherAPIMobile = () => {
  const [weatherIcon, setWeatherIcon] = useState("");
  const [weatherTemp, setWeatherTemp] = useState("");
  // const [weatherUV, setWeatherUV] = useState("");
  // const [weatherWindSpeed, setWeatherWindSpeed] = useState("");
  // const [weatherHumidity, setWeatherHumidity] = useState("");
  const [weatherSummary, setWeatherSummary] = useState("");
  const [weatherLocation, setWeatherLocation] = useState("");
  const [weatherCountry, setWeatherCountry] = useState("");

  const [displayWeather, setdisplayWeather] = useState(false);

  // RUN FUNCTION ONCE DOM HAS LOADED
  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    // GEOLOCATION BROWSER API
    if (navigator.geolocation) {
      const showPosition = async (position) => {
        try {
          //console.log(position);
          const currentLat = await position.coords.latitude;
          const currentLong = await position.coords.longitude;
          // FETCH WEATHER API
          const fetchWeatherInfo = await fetch(
            `https://weatherapi-com.p.rapidapi.com/current.json?q=${currentLat},${currentLong}`,
            {
              method: "GET",
              headers: {
                "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`,
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
              },
            }
          );

          const jsonWeatherInfo = await fetchWeatherInfo.json();
          console.log(jsonWeatherInfo);

          const currentTemp = jsonWeatherInfo.current.temp_c;
          setWeatherTemp(currentTemp);
          // const currentUV = jsonWeatherInfo.current.uv;
          // setWeatherUV(currentUV);
          // const currentWindSpeed = jsonWeatherInfo.current.wind_mph;
          // setWeatherWindSpeed(currentWindSpeed);
          // const currentHumidity = jsonWeatherInfo.current.humidity;
          // setWeatherHumidity(currentHumidity);
          const currentSummary = jsonWeatherInfo.current.condition.text;
          setWeatherSummary(currentSummary);

          const currentLocation = jsonWeatherInfo.location.name;
          setWeatherLocation(currentLocation);
          const currentCountry = jsonWeatherInfo.location.country;
          setWeatherCountry(currentCountry);

          // console.log(
          //   currentTemp,
          //   currentUV,
          //   currentWindSpeed,
          //   currentHumidity,
          //   currentSummary
          // );

          const weatherApiIcon = jsonWeatherInfo.current.condition.icon;
          // SET STATE
          setWeatherIcon(weatherApiIcon);
          setdisplayWeather(true);
          // const weatherApiTemp = jsonWeatherInfo.current.temp_c;
          const navLogo = document.getElementById("nav-logo");
          const navTitle = document.getElementById("nav-title");
          // HIDE MONOCODE LOGO
          navLogo.style.display = "none";
          // UPDATE NAV TITLE
          navTitle.innerHTML = `Your <span>Weather</span>`;
        } catch (e) {
          console.log(e);
        }
      };
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };

  return (
    <>
      <div className="mb-weather-widget-container">
        <div className="mb-weather-widget-container__background"></div>
        <div className="mb-weather-widget-container__inner-container">
          <p className="weather-day">Monday</p>
          <p className="weather-date">7 August 2021</p>
          <div className="weather-location">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p>
              {weatherLocation}, {weatherCountry}
            </p>
          </div>
          <div className="mb-weather-widget-container__weather-image">
            <img
              id="weather-api-icon"
              className={displayWeather ? "-show" : null}
              src={weatherIcon}
              alt="weather api icon"
            />
          </div>
          <div className="weather-temp">
            <p>{weatherTemp}</p>
            {/* <div>⚬</div> */}
            <p>C</p>
          </div>
          <p className="weather-summary">{weatherSummary}</p>
        </div>
      </div>
    </>
  );
};
