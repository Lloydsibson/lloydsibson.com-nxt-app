import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faCodepen } from "@fortawesome/free-brands-svg-icons";
// import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { PagePositionScrollBar } from "./PagePositionScrollBar";

// import { WeatherAPI } from "./ApiWeather";
import { LDToggle } from "./LDToggle";
import { LDToggleMobile } from "./LDToggle";

export const Nav = () => {
  // const body = document.body;
  // const NavToggle = () => {
  //   body.classList.add("menu-open");
  //   const mobileMenu = document.querySelector(".mb-nav-container");
  //   (mobileMenu as HTMLElement).style.display = "flex";
  // };
  return (
    <header className="nav-container">
      {/* <PagePositionScrollBar /> */}
      <Link href="/" className="nav-container__name-container">
        <div className="logo-container">
          {/* <WeatherAPI /> */}
          <img
            id="nav-logo"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013440/img/logo-small.png"
            alt="Logo"
            width="50"
            height="50"
          />
        </div>
        <h2 id="nav-title">
          Lloyd <span>Sibson</span>
        </h2>
      </Link>
      <nav arial-label="Desktop Navigation">
        <ul
          className="nav-container__links-container"
          // style={{
          //   height: `${window.innerHeight + 1}px`,
          //   top: `-${window.innerHeight}px`,
          // }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {/* <a href="#Offline">About Me</a> */}
            <Link href="/about">About</Link>
          </li>
          <li>
            {/* <a href="#Offline">Portfolio</a> */}
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact" className="contact">
              Contact
            </Link>
          </li>
          {/* <li className="tech-stack-logos-container">
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
          </li> */}
          <li>
            <LDToggle viewport={"desktop"} />
          </li>
        </ul>
      </nav>
      <LDToggleMobile viewport={"mobile"} />
      {/* <div id="nav-icon" onClick={NavToggle}> */}
      <div id="nav-icon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <div id="nav-menu-icon">
        <FontAwesomeIcon icon={faBars} />
      </div> */}
    </header>
  );
};
