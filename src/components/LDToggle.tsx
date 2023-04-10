import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export const LDToggle = (props: any) => {
  //const [toggle, setToggle] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      localStorage.getItem("theme") === null
    ) {
      const allToggles = document.querySelectorAll(".toggle-container input");
      allToggles.forEach((toggles) => {
        (toggles as HTMLInputElement).checked = true;
      });
    } else {
      document.body.classList.add("light");
    }
  }, []);

  const onClickHandler = (e: any) => {
    //console.log(e);
    if (e.currentTarget.checked === true) {
      const allToggles = document.querySelectorAll(".toggle-container input");
      allToggles.forEach((toggles) => {
        (toggles as HTMLInputElement).checked = true;
      });
      //console.log("true");
      localStorage.setItem("theme", "dark");
      document.body.classList.remove("light");
      //setToggle(true);
    } else {
      const allToggles = document.querySelectorAll(".toggle-container input");
      allToggles.forEach((toggles) => {
        (toggles as HTMLInputElement).checked = false;
      });
      //console.log("false");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
      //setToggle(false);
    }
  };

  return (
    <div className={`toggle-container ${props.viewport}`}>
      <label htmlFor="ld-toggle">
        <input
          type="checkbox"
          id="ld-toggle"
          aria-label="light and dark mode toggle"
          //defaultChecked={toggle}
          //checked={toggle}
          onChange={(e) => onClickHandler(e)}
        />
        <span className="toggle-container__btn">
          <FontAwesomeIcon icon={faMoon} className="moon icon" />
          <FontAwesomeIcon icon={faSun} className="sun icon" />
        </span>
      </label>
    </div>
  );
};

export const LDToggleMobile = (props: any) => {
  //const [toggle, setToggle] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      localStorage.getItem("theme") === null
    ) {
      const allToggles = document.querySelectorAll(".toggle-container input");
      allToggles.forEach((toggles) => {
        (toggles as HTMLInputElement).checked = true;
      });
    } else {
      document.body.classList.add("light");
    }
  }, []);

  const onClickHandler = (e: any) => {
    //console.log(e);
    if (e.currentTarget.checked === true) {
      const allToggles = document.querySelectorAll(".toggle-container input");
      allToggles.forEach((toggles) => {
        (toggles as HTMLInputElement).checked = true;
      });
      //console.log("true");
      localStorage.setItem("theme", "dark");
      document.body.classList.remove("light");
      //setToggle(true);
    } else {
      const allToggles = document.querySelectorAll(".toggle-container input");
      allToggles.forEach((toggles) => {
        (toggles as HTMLInputElement).checked = false;
      });
      //console.log("false");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
      //setToggle(false);
    }
  };

  return (
    <div className={`toggle-container ${props.viewport}`}>
      <label htmlFor="ld-toggle-mb">
        <input
          type="checkbox"
          id="ld-toggle-mb"
          aria-label="light and dark mode toggle"
          //defaultChecked={toggle}
          //checked={toggle}
          onChange={(e) => onClickHandler(e)}
        />
        <span className="toggle-container__btn">
          <FontAwesomeIcon icon={faMoon} className="moon icon" />
          <FontAwesomeIcon icon={faSun} className="sun icon" />
        </span>
      </label>
    </div>
  );
};
