import { useEffect, useState } from "react";
// SASS
import "./PlexWatchListFeed.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRssSquare } from "@fortawesome/free-solid-svg-icons";

export const PlexRSSFeed = () => {
  const [plexShowData, setPlexShowData] = useState(["..."]);

  // RUN FUNCTION ONCE DOM HAS LOADED
  useEffect(() => {
    fetchPlexWatchList();
  }, []);

  const fetchPlexWatchList = async () => {
    try {
      const fetchPlexWatchListFeed = await fetch(
        "https://rss.plex.tv/6f1ddd0c-8c84-45a3-9163-4639479f0135",
        {
          method: "GET",
        }
      );

      const returnedPlexInfoText = await fetchPlexWatchListFeed.text();
      const returnedPlexInfo = await new window.DOMParser().parseFromString(
        returnedPlexInfoText,
        "text/xml"
      );

      //console.log(returnedPlexInfo);

      const plexShow = returnedPlexInfo.getElementsByTagName("item");

      //console.log(plexShow);

      let plexShowDataArray: Array<any>[any] = [];

      for (let i = 0; i < plexShow.length; i++) {
        plexShowDataArray.push([
          plexShow[i].getElementsByTagName("title")[0].childNodes[0].nodeValue,
          plexShow[i].getElementsByTagName("link")[0].childNodes[0].nodeValue,
          plexShow[i]
            .getElementsByTagName("media:thumbnail")[0]
            .getAttribute("url"),
        ]);
      }

      //console.log(plexShowDataArray);

      // LIMIT ARRAY BY 6
      if (plexShowDataArray.length > 6) {
        plexShowDataArray.length = 6;
      }

      // SET STATE
      setPlexShowData(plexShowDataArray);
    } catch (e) {
      (
        document.querySelector(".plexRSSFeed-container") as HTMLElement
      ).style.display = "none";
      //console.log(e);
    }
  };

  return (
    <div className="plexRSSFeed-container">
      <header className="subheading-container">
        <h2>Watch List</h2>
        <div className="rss-badge">
          <FontAwesomeIcon
            icon={faRssSquare}
            className="service-container__icon pencil"
          />
          <p>RSS</p>
        </div>
      </header>
      <div className="watch-list-container">
        {plexShowData.map((plexData, id) => (
          <div key={id} className="watch-list-container__list-item">
            <a
              className="list-item-link"
              href={plexData[1]}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="list-item-poster"
                style={{ backgroundImage: `url(${plexData[2]})` }}
              ></div>
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </a>
            <h3 className="list-item-title">{plexData[0]}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
