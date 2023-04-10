import React, { useState, useEffect } from "react";
import { WosStockApi } from "./ApiStocksWOS";
import { GoogleNewsApi } from "./ApiGoogleNewsWOS";
// SASS
import "./AppleWatch.scss";

export const AppleWatch = () => {
  const [watchDate, setWatchDate] = useState<string>("Date");
  const [watchDay, setWatchDay] = useState<string>("Day");
  const [watchTime, setWatchTime] = useState<string>("00:00");

  useEffect(() => {
    const dateAndTime: Date = new Date();
    const currentDay: number = dateAndTime.getDay();
    // SETS WATCH DATE
    setWatchDate(dateAndTime.getDate().toString());

    // WATCH DAY
    switch (currentDay) {
      case 0:
        // code block
        setWatchDay("Sun");
        break;

      case 1:
        // code block
        setWatchDay("Mon");
        break;

      case 2:
        // code block
        setWatchDay("Tue");
        break;

      case 3:
        // code block
        setWatchDay("Wed");
        break;

      case 4:
        // code block
        setWatchDay("Thur");
        break;

      case 5:
        // code block
        setWatchDay("Fri");
        break;

      case 6:
        // code block
        setWatchDay("Sat");
        break;

      default:
      // code block
      // DO NOTHING
    }
    //UPDATES EVERY 1 SECOND
    setInterval(() => {
      let dateAndTime: Date = new Date();
      let currentHour: number = dateAndTime.getHours();
      let currentMinutes: string = dateAndTime.getMinutes().toString();
      currentMinutes = ("0" + currentMinutes).slice(-2);
      let watchTimeAndMinutes: string = `${currentHour}:${currentMinutes}`;
      setWatchTime(watchTimeAndMinutes);
    }, 1000);
  }, []);

  return (
    <div className="smart-watch-container">
      <div className="smart-watch-container__inner-container">
        <img
          src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1609536150/img/apple-watch-mock-up.png"
          alt="Watch Face"
          title="Smart Watch"
          width="235"
          height="420"
        />
        <div className="smart-watch-bg"></div>
        <div className="smart-watch-widgets">
          <div className="smart-watch__date-container">
            <div className="smart-watch__date-container__day">{watchDay}</div>
            <div className="smart-watch__date-container__date">{watchDate}</div>
          </div>
          <div className="smart-watch__date-container__time">{watchTime}</div>
          <GoogleNewsApi />
          <WosStockApi />
        </div>
      </div>
    </div>
  );
};
