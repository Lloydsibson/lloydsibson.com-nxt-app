import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [cookieMessage, setCookieMessage] = useState<boolean>(true);

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
      }, 1500);
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
          {/* <span>Cookie Policy</span> */}
          Cookies are used to improve the website experience and help to
          understand how it can be made better. By continuing to use the site
          you agree that you are happy to receive all cookies. If you would like
          to turn off cookies you can manage cookies in your browser settings.
        </div>
        <div className="cookie-container__cookies-right">
          <div id="cookie-accept" onClick={CookieHandler}>
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
