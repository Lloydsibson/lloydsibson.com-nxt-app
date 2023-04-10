import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

//import { WeatherAPIMobile } from "./MbApiWeather";
//import { CovidAPIWidget } from "./CovidAPIWidget";

export const MobileNav = () => {
  const NavItemToggle = () => {
    document.body.classList.remove("menu-open");
    // REMOVES MOBILE NAV AFTER NAV CLOSES
    setTimeout(() => {
      const menu = document.querySelector(".mb-nav-container");
      (menu as HTMLElement).style.display = "none";
    }, 400);
  };
  const NavOverlayToggle = () => {
    document.body.classList.remove("menu-open");
    // REMOVES MOBILE NAV AFTER NAV CLOSES
    setTimeout(() => {
      const menu = document.querySelector(".mb-nav-container");
      (menu as HTMLElement).style.display = "none";
    }, 400);
  };

  return (
    <>
      <nav
        className="mb-nav-container"
        aria-label="Mobile navigation"
        // style={{
        //   height: `${window.innerHeight + 1}px`,
        // }}
      >
        <h3>Menu</h3>
        <div className="custom-divider"></div>
        <ul>
          <li>
            <Link href="/" onClick={NavItemToggle} className="isActive">
              <div className="mb-nav-container__icon">
                <FontAwesomeIcon icon={faHome} />
              </div>
              Home
            </Link>
          </li>
          <li>
            {/* <a href="#Offline">About Me</a> */}
            <Link href="/about" onClick={NavItemToggle}>
              <div className="mb-nav-container__icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              About
            </Link>
          </li>
          <li>
            {/* <a href="#Offline">Portfolio</a> */}
            <Link href="/portfolio" onClick={NavItemToggle}>
              <div className="mb-nav-container__icon">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="contact" onClick={NavItemToggle}>
              <div className="mb-nav-container__icon">
                <FontAwesomeIcon icon={faComment} />
              </div>
              Contact
            </Link>
          </li>
        </ul>
        {/* <CovidAPIWidget /> */}
        {/* <WeatherAPIMobile /> */}
        <div className="custom-divider"></div>
        <div className="tech-stack-logos-container">
          <a href="https://github.com/Lloydsibson">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/lloyd-sibson/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://codepen.io/lloydsibson/">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
          <a href="https://www.figma.com/file/kSUletznveK6k1NFJDhrUR/Monocode-Portfolio?node-id=0%3A1">
            <FontAwesomeIcon icon={faFigma} />
          </a>
        </div>
      </nav>
      <div className="mb-nav-overlay" onClick={NavOverlayToggle}></div>
    </>
  );
};
