//import CvTwoPage from "../../public/static/lloyd-sibson-ba-front-end-developer-cv-2023.pdf";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
// import { faDesktop } from "@fortawesome/free-solid-svg-icons";
// import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
//import { faDrum } from "@fortawesome/free-solid-svg-icons";
// import { Testimonials } from "../components/Testimonials";
// import { Clients } from "../components/Clients";
import { ReadMoreBtn } from "../components/ReadMore/ReadMore";
import { CalcDiffTwoDates } from "../components/CalcDiffTwoDates";
// import { PlexRSSFeed } from "../components/PlexWatchListFeed";
import { AdvancedLazyLoad } from "@/components/AdvancedLazyLoad";
// import { CiCd } from "@/components/CiCd/CiCd";

const AboutPage = () => {
  useEffect(() => {
    document.body.classList.add("about-page"); // Add your desired class here

    // AdvancedLazyLoad
    const blurredImageDivs = document.querySelectorAll(".blurred-img");

    const handleImageLoad = (e: any) => {
      e.currentTarget.closest(".blurred-img").classList.add("loaded");
    };

    blurredImageDivs.forEach((div) => {
      const img = div.querySelector("img");
      if (img) {
        if (img.complete) {
          div.classList.add("loaded");
        } else {
          img.addEventListener("load", handleImageLoad);
        }
      }
    });
    return () => {
      document.body.classList.remove("about-page"); // Remove the class when the component unmounts

      // AdvancedLazyLoad
      blurredImageDivs.forEach((div) => {
        const img = div.querySelector("img");
        if (img) {
          img.removeEventListener("load", handleImageLoad);
        }
      });
    };
  }, []);
  const startDate: any = new Date(2016, 8, 17);
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
      (currentDate.getTime() - startDate.getTime()) / 604800000,
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

  // const CicdNameList = [
  //   {
  //     name: "Unit Tests",
  //   },
  //   {
  //     name: "Deploy-Dev",
  //   },
  //   {
  //     name: "Lighthouse-Audit",
  //   },
  //   {
  //     name: "Merg-Prod",
  //   },
  //   {
  //     name: "Deploy-Prod",
  //   },
  // ];

  const CicdNameList = [
    "Unit Tests",
    "Deploy-Dev",
    "Lighthouse-Audit",
    "Merg-Prod",
    "Deploy-Prod",
  ];

  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Current and past experience, fun facts, previous clients and a downloadable CV available"
        />
      </Head>
      <div className="page-title-container about">
        <section className="page-title-container__banner">
          <header>
            <h1>About</h1>
          </header>
          {/* <div
            className="header-banner"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654419622/img/about-banner)",
            }}
          ></div> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1726141498/bg-linkedin-banner_jasz1t"
            imgALT="Looking after your world"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_500/e_blur:400,f_auto,q_auto/v1726141498/bg-linkedin-banner_jasz1t"
            imgIdName={undefined}
            elemName="header-banner-img-container"
            imgTransparent={false}
            imgWidth={"1320px"}
            imgHeight={"330px"}
            imgClassName={undefined}
            containerClassName={undefined}
            loadingAttr="lazy"
          />
          {/* <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div> */}
        </section>
      </div>
      <section className="bio-container">
        <div className="bio-container__profile-photo-container">
          <div className="profile-photo">
            {/* <div
              className="profile-img"
              style={{
                backgroundImage:
                  //  "url(https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1697048863/linkedin-office-photo-otw_ft2yjb.jpg)",
                  "url(https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1667817743/img/linkedin-office-photo-tp_jjfyuo.jpg)",
              }}
            ></div> */}
            <AdvancedLazyLoad
              imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1753712385/linkedin-photo-1000x1000-crop_eqebwu"
              imgALT="Lloyd Sibson outdoor photo"
              backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_80/e_blur:300,f_auto,q_auto/v1753712385/linkedin-photo-1000x1000-crop_eqebwu"
              imgIdName={undefined}
              elemName="profile-img-container"
              imgTransparent={false}
              imgWidth={"160px"}
              imgHeight={"160px"}
              imgClassName={undefined}
              containerClassName={undefined}
              loadingAttr="lazy"
            />
            {/* <div className="spinner-background"></div>
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div> */}
          </div>
        </div>
        <div className="bio-container__bio">
          <div className="bio-info-container">
            <div className="bio-info-container__name">
              <h2 className="bio-info-container-name">Lloyd Sibson BA</h2>
              <svg
                className="bio-info-container-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="none"
              >
                <path d="M18.5 11c0 3.79-2.29 6.76-6.09 8.21l-.4.14-.38-.14C7.8 17.76 5.5 14.78 5.5 11V6.8L12 4.63l6.5 2.17V11zm-6.49-9L3 5v6c0 5 3.12 8.81 7.77 10.56L12 22l1.27-.44C17.9 19.81 21.01 16 21.01 11V5l-8.99-3zm-1.62 10.63L14.11 8h3.21l-5.85 7.28-.87 1.09-.99-.99-2.96-2.97 1.77-1.77 1.98 1.98z"></path>
              </svg>
            </div>

            <h3 className="bio-info-container__sub-heading">
              CRO Developer (Front End Developer) @ <span>British Gas</span> ⚡
              | A/B Testing | Adobe Target | React | JavaScript | CSS | HTML |
              UI/UX
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
                {/* <a
                  href="/static/lloyd-sibson-ba-front-end-developer-cv.pdf"
                  download
                >
                  Download CV
                </a> */}
              </div>
              <div className="btn-primary bio-btn">
                <a
                  className="vwo linkedin"
                  href="https://www.linkedin.com/in/lloyd-sibson/"
                >
                  <svg
                    className="vwo linkedin-logo"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <title>Linkedin Logo</title>
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                  <span className="vwo view-text">View&nbsp;</span>LinkedIn
                </a>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/lloyd-sibson/"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
          <aside className="bio-other-container">
            <div className="bio-other-container__company">
              <div className="company-image">
                {/* <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654419622/img/next-logo.jpg"
                  alt="Nexts logo"
                  width="45"
                  height="45"
                /> */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1724109679/British-gas-logo_uj9q5p"
                  imgALT="British gas logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_20/e_blur:50,f_auto,q_auto/v1654419622/img/next-logo"
                  imgIdName={undefined}
                  elemName="bio-other-img-container"
                  imgTransparent={false}
                  imgWidth={"45px"}
                  imgHeight={"45px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                  loadingAttr="lazy"
                />
                {/* <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
                </div> */}
              </div>
              <h3>
                <a href="https://www.britishgas.co.uk/">British Gas</a>
                {/* <CalcDiffTwoDates
                  startDate={"08/02/2024"}
                  startYear={2024}
                  startMonth={"Sept"}
                /> */}
                <span className="role-total-years">Sept 2024 - Present</span>
              </h3>
            </div>
            <div className="bio-other-container__company">
              <div className="company-image">
                {/* <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1692825994/shell-small-logo-opt_kdr0im.png"
                  alt="Shells logo"
                  width="45"
                  height="45"
                /> */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654419622/img/next-logo"
                  imgALT="Nexts logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_20/e_blur:50,f_auto,q_auto/v1654419622/img/next-logo"
                  imgIdName={undefined}
                  elemName="bio-other-img-container"
                  imgTransparent={true}
                  imgWidth={"45px"}
                  imgHeight={"45px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                  loadingAttr="lazy"
                />
                {/* <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
                </div> */}
              </div>
              <h3>
                <a href="https://www.next.co.uk/">Next</a>
                <span className="role-total-years">Oct 2021 - Aug 2024</span>
              </h3>
            </div>
            <div className="bio-other-container__education">
              <div className="education-image">
                {/* <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654419622/img/dmu-logo.jpg"
                  alt="De Montfort universities logo"
                  width="45"
                  height="45"
                /> */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1654419622/img/dmu-logo"
                  imgALT="De Montfort universities logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_20/e_blur:50,f_auto,q_auto/v1654419622/img/dmu-logo"
                  imgIdName={undefined}
                  elemName="bio-other-img-container"
                  imgTransparent={true}
                  imgWidth={"45px"}
                  imgHeight={"45px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                  loadingAttr="lazy"
                />
                {/* <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
                </div> */}
              </div>
              <h3>
                <a href="https://www.dmu.ac.uk/home.aspx">
                  De Montfort University
                </a>
              </h3>
            </div>
          </aside>
        </div>
        {/* <Clients /> */}
      </section>
      <div className="custom-divider"></div>
      <section className="recommendations-container">
        <header className="subheading-container">
          <h2>Spotlight {`>`} Review</h2>
        </header>
        <div className="recommendations-container__reviewer">
          <div className="reviewer-photo">
            {/* <img
              src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654459494/img/martin-photo_ejatxf.jpg"
              alt="selfie of Martin Jackson"
              width="70"
              height="70"
              loading="lazy"
            /> */}
            <AdvancedLazyLoad
              imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1732798923/monika-selfie_i0bie4"
              imgALT="selfie of Martin Jackson"
              backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_20/e_blur:50,f_auto,q_auto/v1732798923/monika-selfie_i0bie4"
              imgIdName={undefined}
              elemName="review-spotlight-img-container"
              imgTransparent={true}
              imgWidth={"70px"}
              imgHeight={"70px"}
              imgClassName={undefined}
              containerClassName={undefined}
              loadingAttr="lazy"
            />
          </div>
          <div className="reviewer-info">
            <h3 className="reviewer-info__name">Monika Aleksova-Stankova</h3>
            <h4 className="reviewer-info__job-title">
              Analytics Lead @ British Gas
            </h4>
            <p className="reviewer-info__review-date">
              Nov 28, 2024, Monika Managed Lloyd directly
            </p>
          </div>
        </div>
        <div className="recommendations-container__review">
          <p className="read-more-text">
            Lloyd joined the business at the beginning of September 2024 and
            ever since has shown a great work ethic, delivery at a very high
            standard and the ability to work autonomously.
            <span className="read-more-text__space">&nbsp;</span>
            <br />
            <br />
            Immediately he managed to fit well within the team as well as the
            wider function. He has grasped Adobe Target very quickly and managed
            to deliver on numerous AB tests since joining. All of the output was
            thoroughly checked by him and there were no errors. <br />
            <br />
            His approach to work is very professional - always meeting
            deadlines, working above and beyond in occasions where we have tight
            timescales. <br />
            <br />
            Lloyds front end dev skills are outstanding and he has received
            flawing feedback from various stakeholders within the business.
          </p>
          <ReadMoreBtn text={"Read More"} />
        </div>
      </section>
      <div className="custom-divider"></div>
      <section className="about-me-container">
        <header className="subheading-container">
          <h2>Summary</h2>
        </header>
        <p className="read-more-text">
          As a CRO Developer and Front End Developer at British Gas, I apply
          both technical expertise and creative insights to design, implement,
          and manage A/B and multivariate testing strategies using Adobe Target.
          With a focus on optimising user experiences, I leverage test outcomes
          and business insights to continuously enhance the digital journey for
          the UK’s largest energy and home services provider.
          <br />
          <br />
          In my current role, I write robust, clean, and well-documented code to
          bring the visual elements of tests to life within Adobe Target,
          ensuring cross-browser and cross-device compatibility. I collaborate
          closely with cross-functional teams, including UX/UI designers,
          product managers, and data analysts, to develop testing strategies
          aligned with business goals. Additionally, I provide mentorship and
          technical guidance to junior developers, while staying abreast of
          industry trends and advancements in testing technologies.
          <br />
          <br />
          I am also responsible for interpreting test data and generating
          comprehensive reports, transforming complex insights into actionable,
          data-driven recommendations for stakeholders. Effective communication
          is key, and I ensure that testing plans, progress, and results are
          clearly conveyed to both technical and non-technical stakeholders.
          <br />
          <br />
          Prior to British Gas, I worked as a CRO Developer and Front End
          Developer at Next, where I was instrumental in driving a £25 million
          uplift through A/B testing. I also founded Monocode, a digital agency
          that blends creative and technical expertise to optimise client
          websites and strengthen brand presence. With a BA (Hons) in Fine Art
          from De Montfort University, I am passionate about delivering
          engaging, innovative digital experiences that drive measurable
          results.
        </p>
        <ReadMoreBtn text={"Read More"} />
      </section>
      <div className="custom-divider"></div>
      {/* <section className="services-container">
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
      <div className="custom-divider skills"></div> */}
      <section className="skills-container">
        <div className="skills-container__dev-skills-container">
          <header className="subheading-container">
            <h2>Developer Skills</h2>
          </header>
          <div className="skills-inner-container">
            <div className="skills-inner-container__skill-title-container">
              <h3>HTML/CSS</h3>
              <div className="skill-value">
                {currentDate.getFullYear() - 2016 > 1
                  ? `${currentDate.getFullYear() - 2016} Yrs`
                  : `${currentDate.getFullYear() - 2016} Yr`}
              </div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div
                className="skill-percentage"
                style={{
                  width: `${Math.floor(
                    (currentDate.getFullYear() - 2016) / 2,
                  )}0%`,
                }}
              ></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h3>JavaScript</h3>
              <div className="skill-value">
                {currentDate.getFullYear() - 2016 > 1
                  ? `${currentDate.getFullYear() - 2016} Yrs`
                  : `${currentDate.getFullYear() - 2016} Yr`}
              </div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div
                className="skill-percentage"
                style={{
                  width: `${Math.floor(
                    (currentDate.getFullYear() - 2016) / 2,
                  )}0%`,
                }}
              ></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h3>React</h3>
              <div className="skill-value">
                {currentDate.getFullYear() - 2020 > 1
                  ? `${currentDate.getFullYear() - 2020} Yrs`
                  : `${currentDate.getFullYear() - 2020} Yr`}
              </div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div
                className="skill-percentage"
                style={{
                  width: `${Math.floor(
                    (currentDate.getFullYear() - 2020) / 2,
                  )}0%`,
                }}
              ></div>
            </div>
            <div className="skills-inner-container__skill-title-container">
              <h3>TypeScript</h3>
              <div className="skill-value">
                {currentDate.getFullYear() - 2022 > 1
                  ? `${currentDate.getFullYear() - 2022} Yrs`
                  : `${currentDate.getFullYear() - 2022} Yr`}
              </div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div
                className="skill-percentage"
                style={{
                  width: `${Math.floor(
                    (currentDate.getFullYear() - 2022) / 2,
                  )}0%`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="skills-container__design-skills-container">
          <header className="subheading-container">
            <h2>Design Skills</h2>
          </header>
          <div className="skills-inner-container">
            <div className="skills-inner-container__skill-title-container">
              <h3>Graphic Design</h3>
              <div className="skill-value">
                {currentDate.getFullYear() - 2015 > 1
                  ? `${currentDate.getFullYear() - 2015} Yrs`
                  : `${currentDate.getFullYear() - 2015} Yr`}
              </div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div
                className="skill-percentage"
                style={{
                  width: `${Math.floor(
                    (currentDate.getFullYear() - 2015) / 2,
                  )}0%`,
                }}
              ></div>
            </div>
            <div className="skills-inner-container__skill-title-container">
              <h3>Design Tools</h3>
              <div className="skill-value">
                {currentDate.getFullYear() - 2015 > 1
                  ? `${currentDate.getFullYear() - 2015} Yrs`
                  : `${currentDate.getFullYear() - 2015} Yr`}
              </div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div
                className="skill-percentage"
                style={{
                  width: `${Math.floor(
                    (currentDate.getFullYear() - 2015) / 2,
                  )}0%`,
                }}
              ></div>
            </div>
            <div className="skills-inner-container__skill-title-container">
              <h3>UI Design</h3>
              <div className="skill-value">
                {currentDate.getFullYear() - 2019 > 1
                  ? `${currentDate.getFullYear() - 2019} Yrs`
                  : `${currentDate.getFullYear() - 2019} Yr`}
              </div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div
                className="skill-percentage"
                style={{
                  width: `${Math.floor(
                    (currentDate.getFullYear() - 2019) / 2,
                  )}0%`,
                }}
              ></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h3>UX Design</h3>
              <div className="skill-value">
                {currentDate.getFullYear() - 2021 > 1
                  ? `${currentDate.getFullYear() - 2021} Yrs`
                  : `${currentDate.getFullYear() - 2021} Yr`}
              </div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div
                className="skill-percentage"
                style={{
                  width: `${Math.floor(
                    (currentDate.getFullYear() - 2021) / 2,
                  )}0%`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="skills-container__cro-skills-container">
          <header className="subheading-container">
            <h2>CRO Skills</h2>
          </header>
          <div className="skills-inner-container">
            <div className="skills-inner-container__skill-title-container">
              <h3>A/B Testing</h3>
              <div className="skill-value">
                {currentDate.getFullYear() - 2019 > 1
                  ? `${currentDate.getFullYear() - 2019} Yrs`
                  : `${currentDate.getFullYear() - 2019} Yr`}
              </div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div
                className="skill-percentage"
                style={{
                  width: `${Math.floor(
                    (currentDate.getFullYear() - 2019) / 2,
                  )}0%`,
                }}
              ></div>
            </div>
            <div className="skills-inner-container__skill-title-container">
              <h3>Data Analysis</h3>
              <div className="skill-value">
                {currentDate.getFullYear() - 2021 > 1
                  ? `${currentDate.getFullYear() - 2021} Yrs`
                  : `${currentDate.getFullYear() - 2021} Yr`}
              </div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div
                className="skill-percentage"
                style={{
                  width: `${Math.floor(
                    (currentDate.getFullYear() - 2021) / 2,
                  )}0%`,
                }}
              ></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h3>Copywriting</h3>
              <div className="skill-value">
                {currentDate.getFullYear() - 2021 > 1
                  ? `${currentDate.getFullYear() - 2021} Yrs`
                  : `${currentDate.getFullYear() - 2021} Yr`}
              </div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div
                className="skill-percentage"
                style={{
                  width: `${Math.floor(
                    (currentDate.getFullYear() - 2021) / 2,
                  )}0%`,
                }}
              ></div>
            </div>
            <div className="skills-inner-container__skill-title-container">
              <h3>Marketing</h3>
              <div className="skill-value">
                {currentDate.getFullYear() - 2021 > 1
                  ? `${currentDate.getFullYear() - 2021} Yrs`
                  : `${currentDate.getFullYear() - 2021} Yr`}
              </div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div
                className="skill-percentage"
                style={{
                  width: `${Math.floor(
                    (currentDate.getFullYear() - 2021) / 2,
                  )}0%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="custom-divider"></div>
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
        </div>
      </section> */}
      <div className="custom-divider"></div>
      <section className="tech-stack-container">
        <header className="subheading-container">
          <h2>Tech Stack</h2>
        </header>
        <div className="tech-stack-container__info-container">
          <div className="tech-container">
            <div className="tech-container__tech-info">
              {/* className="skill-spotlight" */}
              <h3>HTML5</h3>
              <p>Markup Lang.</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>CSS3</h3>
              <p>Stylesheet Lang.</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>JavaScript</h3>
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
              <h3>Next.js + Vercel</h3>
              <p>React Framework</p>
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
              <h3>Adobe Target</h3>
              <p>Variant Testing</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>G. Analytics</h3>
              <p>Trends (UX)</p>
            </div>
            <div className="tech-container__tech-info">
              <h3>Adobe Analytics</h3>
              <p>Data Analysis</p>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="custom-divider"></div>
      <section className="cicd-container">
        <header className="subheading-container">
          <h2>Website CI/CD</h2>
        </header>
        <div className="cicd-container__inner-container">
          <div className="cicd-actions-container">
            {CicdNameList.map((name, index) => {
              return <CiCd actionName={name} key={index} />;
            })}
            <div aria-hidden="true" className="cicd-actions-container__line">
              &nbsp;
            </div>
          </div>
          <Link
            className="cicd-github-actions-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Lloydsibson/lloydsibson.com-nxt-app/actions/workflows/testing.yml"
          >
            View GitHub Actions
          </Link>
        </div>
      </section> */}
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
              <span>
                {(calcWorkingDays(startDate, currentDate) * 8).toLocaleString()}
              </span>
            </div>
            <div className="fun-facts-container__fun-facts gaming">
              <FontAwesomeIcon icon={faGamepad} />
              <h3>Recently Played</h3>
              {/* <span>{latestGamePlayed ? latestGamePlayed : "N/A"}</span> */}
              <span>DOOM: Dark Age</span>
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
