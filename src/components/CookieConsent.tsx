import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CookieConsent = () => {
  const [cookieMessage, setCookieMessage] = useState<boolean>(true);
  const router = useRouter();

  // CREATE AND ADD COOKIE

  function createCookie(name: string, value: string, days: number) {
    let date, expires;
    if (days) {
      date = new Date();
      date.setDate(date.getDate() + days);
      expires = "; expires=" + date.toUTCString();
    } else {
      expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  // SEARCH COOKIES & RETURN NAME

  function getCookie(username: string) {
    let name = username + "=";
    let spli = document.cookie.split(";");
    for (let j = 0; j < spli.length; j++) {
      let char = spli[j];
      while (char.charAt(0) == " ") {
        char = char.substring(1);
      }
      if (char.indexOf(name) == 0) {
        return char.substring(name.length, char.length);
      }
    }
    return "";
  }

  //RUN FUNCTION ONCE DOM HAS LOADED
  useEffect(() => {
    if (getCookie("LloydsibsonCookiePolicy").length > 0) {
      // DO NOTHING
    } else {
      //SETS FADE IN DELAY WITH OPACITY CSS
      setTimeout(() => {
        setCookieMessage(false);
      }, 750);
    }
  }, []);

  const CookieHandler = () => {
    createCookie("LloydsibsonCookiePolicy", "Accepted", 365);
    setCookieMessage(true);
  };

  return (
    <div id="cookie-message" className={cookieMessage ? "-close" : ""}>
      <div className="cookie-container">
        <div className="cookie-container__cookies-left">
          <img
            className="cookie-img"
            alt="Cartoon cookie"
            src="https://cdn-icons-png.flaticon.com/512/5473/5473473.png"
          />
          <h3 className="cookie-title">My Site Uses Cookies</h3>
          <p>
            Cookies help me to ensure my site works securely, continually make
            improvements, and personalise your experience.
          </p>
          <p>
            Click ‘Continue’ to get the best experience. There will be a feature
            to ‘Manually Manage Cookies‘ in the future.
            {/* Click ‘Accept All’ to get the best experience. You can change these
            settings at any time by clicking ‘Manually Manage Cookies’ below. */}
          </p>
        </div>
        <div className="cookie-container__cookies-right">
          <button id="cookie-accept" onClick={CookieHandler}>
            Continue
          </button>
          {/* <button
            className="leave"
            onClick={() => {
              router.back();
              // FALL BACK - IF THERES NO HISTORY AND CANT GO BACK CLOSE THE TAB
              setTimeout(function () {
                window.close();
              }, 400);
            }}
          >
            No, Leave Website
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
