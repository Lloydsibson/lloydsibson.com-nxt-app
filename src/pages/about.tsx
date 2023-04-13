//import CvTwoPage from "../static/lloyd-sibson-ba-front-end-developer-cv-2023.pdf";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
// import { Testimonials } from "../components/Testimonials";
import { Clients } from "../components/Clients";
import { ReadMoreBtn } from "../components/ReadMore";
// import { PlexRSSFeed } from "../components/PlexWatchListFeed";

const AboutPage = () => {
  const startDate: any = new Date(2018, 8, 17);
  const currentDate: any = new Date();
  const currentYear: any = currentDate.getFullYear().toString();
  const calcWorkingDays = (startDate: any, currentDate: any) => {
    // input given as Date objects
    let Weeks,
      DateDiff,
      Adjust = 0;
    if (currentDate < startDate) return -1; // error code if dates transposed
    let Weekday1 = startDate.getDay(); // day of week
    let Weekday2 = currentDate.getDay();
    Weekday1 = Weekday1 === 0 ? 7 : Weekday1; // change Sunday from 0 to 7
    Weekday2 = Weekday2 === 0 ? 7 : Weekday2;
    if (Weekday1 > 5 && Weekday2 > 5) Adjust = 1; // adjustment if both days on weekend
    Weekday1 = Weekday1 > 5 ? 5 : Weekday1; // only count weekdays
    Weekday2 = Weekday2 > 5 ? 5 : Weekday2;
    Weeks = Math.floor(
      (currentDate.getTime() - startDate.getTime()) / 604800000
    );
    if (Weekday1 < Weekday2) {
      //Equal to makes it reduce 5 days
      DateDiff = Weeks * 5 + (Weekday2 - Weekday1);
    } else {
      DateDiff = (Weeks + 1) * 5 - (Weekday1 - Weekday2);
    }
    DateDiff -= Adjust; // take into account both days on weekend
    return DateDiff + 1; // add 1 because dates are inclusive
  };

  return (
    <>
      {/* <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="Current and past experience, fun facts, previous clients and a downloadable CV available"
        />
      </Helmet> */}
      <div className="page-title-container about">
        <section className="page-title-container__banner">
          <header>
            <h2>About</h2>
          </header>
          <div
            className="header-banner"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654419622/img/about-banner.jpg)",
            }}
          ></div>
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </section>
      </div>
      <section className="bio-container">
        <div className="bio-container__profile-photo-container">
          <div className="profile-photo">
            <div
              className="profile-img"
              style={{
                backgroundImage:
                  "url(https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1667817743/img/linkedin-office-photo-tp_jjfyuo.jpg)",
              }}
            ></div>
            <div className="spinner-background"></div>
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div>
        </div>
        <div className="bio-container__bio">
          <div className="bio-info-container">
            <h2 className="bio-info-container__name">Lloyd Sibson BA</h2>
            <h3 className="bio-info-container__sub-heading">
              Front End Developer at Next 🛍️ | React | TypeScript | JavaScript |
              CSS | HTML | UI/UX | A/B Testing
            </h3>
            <p className="bio-info-container__country">
              United Kingdom •&nbsp;
              <Link href="/contact" className="bio-contact">
                Contact Info
              </Link>
            </p>
            <p className="bio-info-container__connections">500+ Connections</p>
            <div className="bio-links">
              <div className="btn-primary disabled">
                <a aria-disabled={true}>Download CV</a>
                {/* <a href={CvTwoPage} download>
                  Download CV
                </a> */}
              </div>
              <div className="btn-primary bio-btn">
                <a href="https://www.linkedin.com/in/lloyd-sibson/">
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
          <aside className="bio-other-container">
            <div className="bio-other-container__company">
              <div className="company-image">
                <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654419622/img/next-logo.jpg"
                  alt="Nexts logo"
                  width="45"
                  height="45"
                />
                <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
                </div>
              </div>
              <h3>
                <a href="https://www.next.co.uk/">Next</a>
              </h3>
            </div>
            <div className="bio-other-container__education">
              <div className="education-image">
                <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654419622/img/dmu-logo.jpg"
                  alt="De Montfort universities logo"
                  width="45"
                  height="45"
                />
                <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
                </div>
              </div>
              <h3>
                <a href="https://www.dmu.ac.uk/home.aspx">
                  De Montfort University
                </a>
              </h3>
            </div>
          </aside>
        </div>
        <Clients />
      </section>
      <div className="custom-divider"></div>
      <section className="recommendations-container">
        <header className="subheading-container">
          <h2>Spotlight {`>`} Review</h2>
        </header>
        <div className="recommendations-container__reviewer">
          <div className="reviewer-photo">
            <img
              src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654459494/img/martin-photo_ejatxf.jpg"
              alt="selfie of Martin Jackson"
              width="70"
              height="70"
              loading="lazy"
            />
          </div>
          <div className="reviewer-info">
            <h3 className="reviewer-info__name">Martin Jackson</h3>
            <h4 className="reviewer-info__job-title">
              Scrum Master / Team Lead at NEXT
            </h4>
            <p className="reviewer-info__review-date">
              May 13, 2022, Martin Managed Lloyd directly
            </p>
          </div>
        </div>
        <div className="recommendations-container__review">
          <p className="read-more-text">
            Lloyd joined the team at Next and it didn&apos;t take long for him
            to begin to show his potential. After becoming familiar with the
            team&apos;s Agile processes he began to display superb technical
            skills, and additionally has proven to be a real help to other
            developers coming into the team.
            <br />
            <br />
            <span className="read-more-text__space">&nbsp;</span>Efficient,
            skilled, prompt, approachable and knowledgeable, Lloyd is going to
            be a valuable asset to any team that he is a part of.
          </p>
          <ReadMoreBtn text={"Read More"} />
        </div>
      </section>
      <div className="custom-divider"></div>
      <section className="about-me-container">
        <header className="subheading-container">
          <h2>About</h2>
        </header>
        <p className="read-more-text">
          As a self-motivated and proactive Front-End Developer with a BA (Hons)
          in Fine Art, I have successfully developed unique websites and complex
          user interfaces for high profile clients including Rolex, Tudor, Tag
          Heuer, Cartier, Gucci, Omega, Breitling and IWC.
          <br />
          <br />
          The areas in which I excel the most include coding and developing
          websites, customer service, communication and using various languages,
          tools and frameworks, including HTML5, CSS3, JavaScript, JQuery and
          Bootstrap.
          <br />
          <br />
          I am currently working within an agile team as a Front-End Developer
          for Next, multinational clothing, footwear and home products retailer.
          Previously, I worked as a Front-End Developer on all E-commerce
          websites for The Watches of Switzerland Group, the largest prestige
          luxury jewellers and timepieces specialist in the UK, where I was also
          the dedicated UK and USA Developer for Rolex and official
          representative for The WOS Group. Using my creative design approach,
          coupled with extensive industry, E-commerce and UI/UX knowledge, I
          created a bespoke website journey for Rolex on behalf of Watches of
          Switzerland, whilst adhering to Rolex&apos;s strict design and
          development requirements.
          <br />
          <br />
          In addition to being a successful developer, I also have an
          entrepreneurial and creative design background. I founded and managed
          Monocode, an innovative digital agency, where I combine both creative
          and technical aspects of design and development to optimise
          clients&apos; online presence and brand awareness. I create unique
          graphics and web designs for a range of clients in a freelance
          capacity, utilising various design techniques, development tools and
          technologies.
          <br />
          <br />
          One of my personal projects is a voluntary role as UX Developer and
          Designer at Arclight, a non-profit events company founded in 2019 with
          a passion for music and education to help make a change in what has
          locally become a dying part of the city&apos;s culture.
          <br />
          <br />
          To find out more about how I could make a significant contribution to
          your organisation, please reach out through the Contact page or send
          me an InMail on Linkedin.
        </p>
        <ReadMoreBtn text={"Read More"} />
      </section>
      <div className="custom-divider"></div>
      <section className="services-container">
        <header className="subheading-container">
          <h2>What I Do</h2>
        </header>
        <div className="services-container__services">
          <div className="service-container">
            <FontAwesomeIcon
              icon={faDesktop}
              className="service-container__icon desktop"
            />
            <div className="service-container__info">
              <h3>Web Development</h3>
              <p>
                Developing beautiful websites and components using various
                languages, tools and frameworks. I like to code things from
                scratch, and enjoy bringing ideas to life in the browser.
              </p>
            </div>
          </div>
          <div className="service-container">
            <FontAwesomeIcon
              icon={faPencilAlt}
              className="service-container__icon pencil"
            />
            <div className="service-container__info">
              <h3>Graphic & UI Design</h3>
              <p>
                In addition to being a successful developer, I also have an
                entrepreneurial and creative design background. I value simple
                structure, clean design patterns, and thoughtful interactions.
              </p>
            </div>
          </div>
          <div className="service-container">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="service-container__icon cart"
            />
            <div className="service-container__info">
              <h3>Ecommerce</h3>
              <p>
                Worked for both the largest prestige luxury jewellers and a FTSE
                100 clothing retailer. I was also the dedicated UK developer for
                Rolex and contributed to a £10,000,000 uplift for Next PLC.
              </p>
            </div>
          </div>
          <div className="service-container">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="service-container__icon charity"
            />
            <div className="service-container__info">
              <h3>Charity</h3>
              <p>
                One of my personal projects is a voluntary role as the UX
                Developer at Arclight, a non-profit charity founded in 2019 with
                a passion for music and education.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="custom-divider skills"></div>
      <section className="skills-container">
        <div className="skills-container__design-skills-container">
          <header className="subheading-container">
            <h2>Design Skills</h2>
          </header>
          <div className="skills-inner-container">
            <div className="skills-inner-container__skill-title-container">
              <h3>Graphic Design</h3>
              <div className="skill-value">9 Yr.</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "90%" }}></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h3>UI Design</h3>
              <div className="skill-value">5 Yr.</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "50%" }}></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h3>Print Design</h3>
              <div className="skill-value">7 Yr.</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "70%" }}></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h3>Logo Design</h3>
              <div className="skill-value">8 Yr.</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
        <div className="skills-container__dev-skills-container">
          <header className="subheading-container">
            <h2>Developer Skills</h2>
          </header>
          <div className="skills-inner-container">
            <div className="skills-inner-container__skill-title-container">
              <h3>HTML/CSS</h3>
              <div className="skill-value">5 Yr.</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "50%" }}></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h3>JavaScript</h3>
              <div className="skill-value">5 Yr.</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "50%" }}></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h3>TypeScript</h3>
              <div className="skill-value">2 Yr.</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "20%" }}></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h3>React</h3>
              <div className="skill-value">3 Yr.</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "30%" }}></div>
            </div>
          </div>
        </div>
      </section>
      <div className="custom-divider"></div>
      <section className="learning-container">
        <header className="subheading-container">
          <h2>Learning</h2>
        </header>
        <div className="learning-container__technologies">
          <div className="learning-tech-x">
            <div className="learning-tech-x__image-container">
              <img
                className="learning-tech-x-image"
                src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1666567023/img/Typescript-logo_m0gsa7.png"
                loading="lazy"
                alt="Typescripts logo"
              />
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
            <h3 className="learning-tech-x__title">TypeScript</h3>
            <p className="learning-tech-x__type">Language</p>
          </div>
          <div className="learning-tech-x">
            <div className="learning-tech-x__image-container">
              <img
                className="learning-tech-x-image"
                src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1666567023/img/Jest-logo_yzoexr.png"
                loading="lazy"
                alt="Jests logo"
              />
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
            <h3 className="learning-tech-x__title">Jest</h3>
            <p className="learning-tech-x__type">Unit Testing</p>
          </div>
          {/* <div className="learning-tech-x">
            <img
              className="learning-tech-x__image"
              src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
              loading="lazy"
              alt="Reduxs logo"
            />
            <h3 className="learning-tech-x__title">Redux</h3>
          </div>
          <div className="learning-tech-x">
            <img
              className="learning-tech-x__image"
              src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/full/nextjs.png"
              loading="lazy"
              alt="Next JS logo"
            />
            <h3 className="learning-tech-x__title">Next.js</h3>
          </div> */}
        </div>
      </section>
      <div className="custom-divider"></div>
      <section className="tech-stack-container">
        <header className="subheading-container">
          <h2>Tech Stack</h2>
        </header>
        <div className="tech-stack-container__info-container">
          <div className="tech-container">
            <div className="tech-container__tech-info">
              <h3 className="skill-spotlight">HTML5</h3>
              <p>Markup Lang.</p>
            </div>
            <div className="tech-container__tech-info">
              <h3 className="skill-spotlight">CSS3</h3>
              <p>Stylesheet Lang.</p>
            </div>
            <div className="tech-container__tech-info">
              <h3 className="skill-spotlight">JavaScript</h3>
              <p>ES5/ES6</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>TypeScript</h3>
              <p>Type Tooling</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>React</h3>
              <p>UI Library</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>Redux</h3>
              <p>State Storage</p>
            </div>
          </div>

          <div className="tech-container">
            <div className="tech-container__tech-info">
              <h3>SASS</h3>
              <p>CSS Preprocessor</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>GIT</h3>
              <p>Version Control</p>
            </div>

            <div className="tech-container__tech-info">
              <h3>Azure DevOps</h3>
              <p>Kanban / Agile</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>Visual Studio</h3>
              <p>IDE</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>SAP H5/H6</h3>
              <p>CMS</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>WordPress</h3>
              <p>CMS</p>
            </div>
          </div>

          <div className="tech-container">
            <div className="tech-container__tech-info">
              <h3>AWS Amplify</h3>
              <p>CI/CD</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>FileZilla</h3>
              <p>FTP</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>Cloudinary</h3>
              <p>Image CDN</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>Webpack</h3>
              <p>Module Bundler</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>JQuery</h3>
              <p>JS Library</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>Bootstrap</h3>
              <p>CSS Framework</p>
            </div>
          </div>

          <div className="tech-container">
            <div className="tech-container__tech-info">
              <h3>Figma</h3>
              <p>Designing (UI)</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>Hotjar</h3>
              <p>Heat Maps (UX)</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>Monetate</h3>
              <p>A/B Testing</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>G. Analytics</h3>
              <p>Trends (UX)</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>Photoshop {currentYear}</h3>
              <p>Designing</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>Google Suite</h3>
              <p>Office Tools</p>
            </div>
          </div>
        </div>
      </section>
      <div className="custom-divider"></div>
      <div className="tech-stack-container other">
        {/* <section className="tech-stack-container__info-container">
          <header className="subheading-container">
            <h2>And More...</h2>
          </header>
          <div className="info-inner-container">
            <div className="tech-container">
              <div className="tech-container__tech-info">
                <h3>Visual Studio</h3>
                <p>IDE</p>
              </div>
              <div className="tech-container__tech-info">
                <h3>Photoshop {currentYear}</h3>
                <p>Designing</p>
              </div>

              <div className="tech-container__tech-info">
                <h3>Cloudflare</h3>
                <p>Internet Security</p>
              </div>
              <div className="tech-container__tech-info">
                <h3>Google Suite</h3>
                <p>Office Tools</p>
              </div>
            </div>

            <div className="tech-container">
              <div className="tech-container__tech-info">
                <h3>FileZilla</h3>
                <p>FTP</p>
              </div>
              <div className="tech-container__tech-info">
                <h3>WordPress</h3>
                <p>CMS</p>
              </div>
              <div className="tech-container__tech-info">
                <h3>SAP H3/H6</h3>
                <p>CMS</p>
              </div>
              <div className="tech-container__tech-info">
                <h3>OpenCart</h3>
                <p>CMS</p>
              </div>
            </div>
          </div>
        </section> */}
        <section className="tech-stack-container__fun-facts">
          <header className="subheading-container">
            <h2>Fun Facts</h2>
          </header>
          <div className="fun-facts-container">
            <div className="fun-facts-container__fun-facts">
              <FontAwesomeIcon icon={faClock} />
              <h3>Developer Hours</h3>
              <span>{calcWorkingDays(startDate, currentDate) * 8}</span>
            </div>
            <div className="fun-facts-container__fun-facts gaming">
              <FontAwesomeIcon icon={faGamepad} />
              <h3>Recently Completed</h3>
              <span>Atomic Heart</span>
            </div>
            <div className="fun-facts-container__fun-facts">
              <FontAwesomeIcon icon={faDumbbell} />
              <h3>Bench Press Record</h3>
              <span>125KG</span>
            </div>
            <div className="fun-facts-container__fun-facts">
              <FontAwesomeIcon icon={faGuitar} />
              <h3>Playing Guitar Since</h3>
              <span>2010</span>
            </div>
          </div>
          {/* <PlexRSSFeed /> */}
        </section>
      </div>
    </>
  );
};

export default AboutPage;

/*         
          <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
            
            */