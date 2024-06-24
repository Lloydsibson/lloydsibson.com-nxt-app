import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";

import { BackToTop } from "./BackToTop";
import { GitHubBadges } from "./GitHubBadges";

export const Footer = () => {
  const currentDate: Date = new Date();
  const currentYear: string = currentDate.getFullYear().toString();

  return (
    <footer className="footer-container">
      <BackToTop />
      <ul>
        <li>
          <GitHubBadges Classname={"desktop"} />
        </li>
        <li>
          <a href="https://github.com/Lloydsibson">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lloyd-sibson/">Linkedin</a>
        </li>
        <li>
          <a href="https://codepen.io/lloydsibson/pens/public">CodePen</a>
        </li>
        <li>
          <a href="https://www.figma.com/file/kSUletznveK6k1NFJDhrUR/Monocode-Portfolio?node-id=0%3A1">
            Figma
          </a>
        </li>
      </ul>
      <div className="footer-container__legal">
        <p>© Lloyd Sibson {currentYear} | All rights reserved </p>
        <div className="footer-tech-toggle-container">
          <div className="tech-stack-logos-container">
            <a
              href="https://en.wikipedia.org/wiki/HTML5"
              target="_blank"
              rel="noreferrer"
              aria-label="HTML"
            >
              <FontAwesomeIcon icon={faHtml5} />
            </a>
            <a
              href="https://en.wikipedia.org/wiki/CSS"
              target="_blank"
              rel="noreferrer"
              aria-label="CSS"
            >
              <FontAwesomeIcon icon={faCss3} />
            </a>
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="SASS"
            >
              <FontAwesomeIcon icon={faSass} />
            </a>
            <a
              href="https://en.wikipedia.org/wiki/JavaScript"
              target="_blank"
              rel="noreferrer"
              aria-label="JavaScript"
            >
              <FontAwesomeIcon icon={faJsSquare} />
            </a>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
              aria-label="React"
            >
              <FontAwesomeIcon icon={faReact} />
            </a>
          </div>
          {/* <div className="g-light-results">
            <img src="" alt="" />
            <div className="g-light-results__accessibility">
              <p className="g-light-result">100</p>
              <p className="g-light-test-name">Accessibility</p>
            </div>
            <div className="g-light-results__SEO">
              <p className="g-light-result">100</p>
              <p className="g-light-test-name">SEO</p>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
