import { useState, useEffect } from "react";
import { WosStockApi } from "./ApiStocksWOS";
import { GoogleNewsApi } from "./ApiGoogleNewsWOS";
import { AdvancedLazyLoad } from "./AdvancedLazyLoad";
import { useDispatch } from "react-redux";
import {
  ApiGoogleNewsWOSAction,
  ApiGoogleLinkWOSAction,
} from "../../redux/ApiGoogleNewsWOSRedux";
import { ApiStocksWOSAction } from "../../redux/ApiStocksWOSRedux";

export const AppleWatch = () => {
  // REDUX DISPATCH
  const dispatch = useDispatch();

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

    //API CALLS + UPDATES REDUX STORE
    ///////////////////////////////
    const fetchGoogleNewsApi = async () => {
      try {
        const fetchNews = await fetch(
          "https://real-time-news-data.p.rapidapi.com/search?query=Watches%20of%20Switzerland%20Group&country=GB&lang=en",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
              "x-rapidapi-key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
            },
          }
        );
        const returnedNews = await fetchNews?.json();
        //console.log(returnedNews);

        const googleNewsTitle = await returnedNews?.data[0]?.title;
        const googleNewsLink = await returnedNews?.data[0]?.link;

        // UPDATE REDUX STATE
        dispatch(ApiGoogleNewsWOSAction(googleNewsTitle));
        dispatch(ApiGoogleLinkWOSAction(googleNewsLink));
      } catch (e: any) {
        dispatch(ApiGoogleNewsWOSAction("API LIMIT REACHED"));
        console.log(e, "API Issue");
      }
    };
    ///////////////////////////////
    const fetchWosStockPrice = async () => {
      try {
        const fetchStockPrice = await fetch(
          "https://alpha-vantage.p.rapidapi.com/query?symbol=WOSG.L&function=GLOBAL_QUOTE",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
              "x-rapidapi-key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
            },
          }
        );
        const returnedStockPrice = await fetchStockPrice.json();
        //console.log(returnedStockPrice);
        let stockPrice = returnedStockPrice["Global Quote"]["05. price"];
        //console.log(stockPrice);
        stockPrice = stockPrice.split(".")[0];

        // UPDATE REDUX STATE
        dispatch(ApiStocksWOSAction(stockPrice));
      } catch (e: any) {
        dispatch(ApiStocksWOSAction("N/A"));
        console.log(e, "API Error");
      }
    };
    ///////////////////////////////
    fetchGoogleNewsApi();
    fetchWosStockPrice();
  }, [dispatch]);

  return (
    <div className="smart-watch-container">
      <div className="smart-watch-container__inner-container">
        {/* <img
          src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1609536150/img/apple-watch-mock-up.png"
          alt="Watch Face"
          title="Smart Watch"
          width="235"
          height="420"
        /> */}
        <AdvancedLazyLoad
          imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1609536150/img/apple-watch-mock-up"
          imgALT="Watch Face"
          backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_100/e_blur:100,f_auto,q_auto/v1609536150/img/apple-watch-mock-up"
          imgIdName={undefined}
          elemName="smart-watch-img-container"
          imgTransparent={true}
          imgWidth={"235px"}
          imgHeight={"420px"}
          imgClassName={undefined}
          containerClassName={undefined}
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
