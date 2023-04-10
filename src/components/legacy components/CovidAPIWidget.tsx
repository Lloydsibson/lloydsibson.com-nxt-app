import { useEffect, useState } from "react";
import "./CovidAPIWidget.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export const CovidAPIWidget = () => {
  const [confirmed, setConfirmed] = useState("...");
  const [recovered, setRecovered] = useState("...");
  const [critical, setCritical] = useState("...");
  const [deaths, setDeaths] = useState("...");
  const [lastUpdate, setLastUpdate] = useState("fetching Covid data...");

  const closeHandler = (e: any) => {
    e.currentTarget.parentElement.style.display = "none";
  };

  // RUN FUNCTION ONCE DOM HAS LOADED
  useEffect(() => {
    // ONLY FETCH DATA IF VIEWPORT IS LOWER THEN 900PX
    if (window.innerWidth < 900) {
      fetchCovidData();
    } else {
      // DO NOTHING
      setLastUpdate("Mobile Only Feature. Please Refresh On Mobile Viewport");
    }
  }, []);

  const fetchCovidData = async () => {
    try {
      const fetchNews = await fetch(
        "https://covid-19-data.p.rapidapi.com/country?name=united%20kingdom",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`,
          },
        }
      );

      const returnedCovidData = await fetchNews.json();
      //console.log(returnedCovidData);
      // ADDS A COMMA TO NUMBERS
      const rawCovid19APINumbersArray = [
        returnedCovidData[0].confirmed,
        returnedCovidData[0].recovered,
        returnedCovidData[0].critical,
        returnedCovidData[0].deaths,
      ];
      let covid19APINumbersArray: Array<any>[any] = [];
      rawCovid19APINumbersArray.forEach((x) => {
        covid19APINumbersArray.push(
          x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
      });
      ///////

      //console.log(covid19APINumbersArray);

      let lastUpdate = returnedCovidData[0].lastUpdate;
      lastUpdate = lastUpdate.split("T")[1];
      lastUpdate = lastUpdate.split("+")[0];
      setConfirmed(covid19APINumbersArray[0]);
      setRecovered(covid19APINumbersArray[1]);
      setCritical(covid19APINumbersArray[2]);
      setDeaths(covid19APINumbersArray[3]);
      setLastUpdate(`UK, Last Update at ${lastUpdate} (+2)`);
    } catch (e) {
      setLastUpdate("Error with API Provider");
      console.log(e, "Hit API Limit");
    }
  };

  return (
    <div className="covid-widget">
      <div className="covid-overlay"></div>
      <FontAwesomeIcon icon={faTimesCircle} onClick={(e) => closeHandler(e)} />
      <div className="covid-widget__title">
        <h4>Covid-19</h4>
        <p>{lastUpdate}</p>
      </div>
      <div className="covid-widget__two-wide">
        <div className="covid-info">
          <h5>{confirmed}</h5>
          <h6>Confirmed</h6>
        </div>
        <div className="covid-info">
          <h5>{recovered}</h5>
          <h6>Recovered</h6>
        </div>
      </div>
      <div className="covid-widget__two-wide">
        <div className="covid-info">
          <h5>{critical}</h5>
          <h6>Critical</h6>
        </div>
        <div className="covid-info">
          <h5>{deaths}</h5>
          <h6>Deaths</h6>
        </div>
      </div>
    </div>
  );
};
