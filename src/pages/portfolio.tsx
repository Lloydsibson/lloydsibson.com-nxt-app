// import { useEffect } from "react";

import { useEffect } from "react";
//import Link from "next/link";
import Head from "next/head";
// import { Card } from "../components/Card";
// import { Lightbox } from "../components/Lightbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
// import { faLink } from "@fortawesome/free-solid-svg-icons";
// import { faVideo } from "@fortawesome/free-solid-svg-icons";
// import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
// import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { AppleWatch } from "../components/AppleWatch";
import { ReadMoreBtn } from "../components/ReadMore";
import { CalcDiffTwoDates } from "@/components/CalcDiffTwoDates";
// import { EventBriteCard } from "../components/ApiEventBriteCard";
import { AdvancedLazyLoad } from "@/components/AdvancedLazyLoad";

const PortfolioPage = () => {
  useEffect(() => {
    document.body.classList.add("portfolio-page"); // Add your desired class here

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
      document.body.classList.remove("portfolio-page"); // Remove the class when the component unmounts

      // AdvancedLazyLoad
      blurredImageDivs.forEach((div) => {
        const img = div.querySelector("img");
        if (img) {
          img.removeEventListener("load", handleImageLoad);
        }
      });
    };
  }, []);
  const LinkData = [
    {
      url: "https://www.figma.com/design/iGYZapLn1bivJyg84Nz2vn/Portfolio-Page---Links---Pop-up?node-id=0-1&t=NcKL5dIrHwX9l0V0-0",
      linkText: "Links Pop-Up",
      postedDate: new Date(2024, 5, 28),
      icon: faFigma,
      tags: ["UI", "Share", "Likes"],
    },
    {
      url: "https://codepen.io/lloydsibson/pen/abrwgaq",
      linkText: "VIP Slider",
      postedDate: new Date(2024, 5, 7),
      icon: faCodepen,
      tags: ["Next", "jQuery"],
    },
    {
      url: "https://codepen.io/lloydsibson/pen/gOJmPev",
      linkText: "NextPay Credit Form",
      postedDate: new Date(2024, 4, 31),
      icon: faCodepen,
      tags: ["Credit", "Accessibility"],
    },
    {
      url: "https://codepen.io/lloydsibson/pen/MWReOgE",
      linkText: "FashionPay Accordion",
      postedDate: new Date(2024, 2, 12),
      icon: faCodepen,
      tags: ["Payment", "Accordion"],
    },
    {
      url: "https://www.figma.com/file/RBoplwmRErJYzx54ZBG2kH/Cookie-Banner?type=design&node-id=0%3A1&mode=design&t=5QBWrvZQCXafsYzq-1",
      linkText: "Cookie Banner Redesign",
      postedDate: new Date(2023, 11, 28),
      icon: faFigma,
      tags: ["UI", "Pop-up"],
    },
    {
      url: "https://youtu.be/23Af9vhmL-4",
      linkText: "QA Demo #98",
      postedDate: new Date(2022, 9, 27),
      icon: faYoutube,
      tags: ["Video", "Monetate"],
    },
    {
      url: "https://www.figma.com/file/USiOpYPNZButiqepyshZX7/Raspberry-PI-Sensor-Page---%2Frp?node-id=0%3A1",
      linkText: "RP Sensors",
      postedDate: new Date(2022, 8, 25),
      icon: faFigma,
      tags: ["UI", "Design", "Tablet"],
    },
    // {
    //   url: "https://codepen.io/lloydsibson/pen/bGBqKpN",
    //   linkText: "Eventbrite API",
    //   postedDate: new Date(2022, 3, 22),
    //   icon: faCodepen,
    //   tags: ["API", "Data"],
    // },
    {
      url: "https://www.figma.com/file/UrJ8rP5ZPKUB66aTE1mvrX/Arclight-Music---Home?node-id=0%3A1",
      linkText: "Arclight Website",
      postedDate: new Date(2021, 9, 26),
      icon: faFigma,
      tags: ["UI/UX", "Design"],
    },
    // {
    //   url: "https://www.figma.com/file/dgj6fvLAAhsRF79iDH3U2W/Mobile-Nav-and-Widget?node-id=0%3A1",
    //   linkText: "Covid API (UI Design)",
    //   postedDate: new Date(2021, 8, 30),
    //   icon: faFigma,
    // },
    // {
    //   url: "https://www.beasportsclinic.co.uk/",
    //   linkText: "Client Home Redesign",
    //   postedDate: new Date(2021, 7, 29),
    //   icon: faDesktop,
    // },
    // {
    //   url: "https://www.figma.com/file/1KCPCSEHcV0lxoaFCzI1P8/Bea's-Sport-Clinic---Home-Page-Redesign?node-id=0%3A1",
    //   linkText: "Client Wireframe",
    //   postedDate: new Date(2021, 7, 24),
    //   icon: faFigma,
    // },
    // {
    //   url: "https://www.figma.com/file/L963Av0kWVoSCZr6qGQNMY/Bea's-Sports-Clinic---Homepage---Layout-Redesign---Low-Fi-Wireframe",
    //   linkText: "Client Wireframe (Low Fi.)",
    //   postedDate: new Date(2021, 7, 19),
    //   icon: faFigma,
    // },
    // {
    //   url: "https://www.figma.com/file/xawnaEYP9XECDnxihvXTNn/New-Website-%26-Theme-V2.1",
    //   linkText: "New Website Design",
    //   postedDate: new Date(2021, 4, 8),
    //   icon: faFigma,
    // },
    // {
    //   url: "https://www.watches-of-switzerland.co.uk/rolex/servicing-your-rolex",
    //   linkText: "WOS - Rolex",
    //   postedDate: new Date(2021, 0, 15),
    //   icon: faDesktop,
    // },
    // {
    //   url: "https://www.figma.com/file/kSUletznveK6k1NFJDhrUR/Monocode-Portfolio?node-id=0%3A1",
    //   linkText: "APUK - Mobile Nav Design",
    //   postedDate: new Date(2021, 3, 10),
    //   icon: faFigma,
    // },
    // {
    //   url: "https://www.watches-of-switzerland.co.uk/rolex/servicing-your-rolex",
    //   linkText: "WOS - Servicing Your Rolex",
    //   postedDate: new Date(2021, 0, 15),
    //   icon: faDesktop,
    // },
    // {
    //   url: "https://www.mappinandwebb.com/rolex/contact-us",
    //   linkText: "M&W Rolex Map",
    //   postedDate: new Date(2020, 6, 22),
    //   icon: faDesktop,
    // },
  ];

  // TAKES POSTED DATE AND WORKS OUT HOW MANY DAYS HAVE PASSED AGAINST CURRENT DATE
  const postedDate = (PostedDate: any) => {
    const postedDate = PostedDate;
    const now: any = new Date();

    const difference = now - postedDate;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const daysSince = Math.floor(difference / millisecondsPerDay);

    const today = (
      <p>
        <span>New</span>
        Posted Today
      </p>
    );

    const day1 = (
      <p>
        <span>New</span>
        Posted {daysSince} Day Ago
      </p>
    );

    const day2To14 = (
      <p>
        <span>New</span>
        Posted {daysSince} Days Ago
      </p>
    );

    const beyond = <p>Posted {daysSince} Days Ago</p>;

    if (daysSince === 0) {
      // console.log("today");
      return today;
    } else if (daysSince === 1) {
      return day1;
    } else if (daysSince > 1 && daysSince < 14) {
      return day2To14;
    } else {
      return beyond;
    }
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Selected development and design examples from previous clients and projects"
        />
      </Head>
      <section className="page-title-container portfolio">
        <header>
          <h1>Portfolio</h1>
        </header>
        <p>Selected Examples</p>
      </section>
      <div className="portfolio-container">
        <section className="portfolio-container__links-container spotlight">
          <header className="subheading-container spotlight">
            <h2>Links</h2>
          </header>
          <div className="links-container">
            {LinkData.map((LinkData, id) => (
              <div key={id} className="link-container">
                <FontAwesomeIcon icon={LinkData.icon} />
                <div className="link-container__info">
                  <a target="_blank" rel="noreferrer" href={LinkData.url}>
                    {LinkData.linkText}
                  </a>
                  <div className="posted-container">
                    {postedDate(LinkData.postedDate)}
                  </div>
                  <div className="link-tag-container">
                    {LinkData.tags.map((tags, id) => (
                      <p className="link-tag-container__tag" key={id}>
                        {tags}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="custom-divider spotlight"></div>
        <section className="portfolio-container__volunteering-container">
          <header className="subheading-container">
            <h2>Volunteering</h2>
          </header>
          <div className="vt-role-container">
            <div className="vt-role-container__company-logo">
              {/* <img
                src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655638830/img/am-grn-logo_ewow6k.png"
                alt="Arclight music logo"
                width="74"
                height="74"
              /> */}
              <AdvancedLazyLoad
                imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655638830/img/am-grn-logo_ewow6k"
                imgALT="Arclight music logo"
                backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_40/e_blur:100,f_auto,q_auto/v1655638830/img/am-grn-logo_ewow6k"
                imgIdName={undefined}
                elemName="arclight-logo-img-container"
                imgTransparent={true}
                imgWidth={"74px"}
                imgHeight={"74px"}
                imgClassName={undefined}
                containerClassName={undefined}
              />
            </div>
            <div className="vt-role-container__role">
              <h3 className="vt-role-title">UI Developer</h3>
              <h4 className="vt-role-company-name">
                {/* Github:&nbsp;
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Lloydsibson/arclightmusic.com"
                >
                  Arclight Music
                </a> */}
                <a
                  href="https://arclightmusic.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Arclight Music
                </a>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </h4>
              <div className="vt-role-other">
                <h5 className="vt-role-other__date">
                  <CalcDiffTwoDates
                    startDate={"01/01/2019"}
                    startYear={2019}
                    startMonth={"Jan"}
                  />
                  {/* <span className="role-total-years">Jan 2019 - Dec 2022</span> */}
                </h5>
                <h6 className="vt-role-other__industry">Arts & Culture</h6>
              </div>
            </div>
          </div>
          <div className="vt-role-techstack">
            <h3>Tech Stack</h3>
            <div className="vt-role-techstack__tech">
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                {/* <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655638998/img/react-logo_bqlswo.png"
                  alt="React logo"
                  width="55"
                  height="55"
                  loading="lazy"
                /> */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655638998/img/react-logo_bqlswo"
                  imgALT="React logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_30/e_blur:50,f_auto,q_auto/v1655638998/img/react-logo_bqlswo"
                  imgIdName={undefined}
                  elemName="tech-stack-img-container"
                  imgTransparent={true}
                  imgWidth={"55px"}
                  imgHeight={"55px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                />
              </a>
              <a
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="noreferrer"
              >
                {/* <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655638997/img/gatsby-logo_cpbryq.png"
                  alt="Gatsby logo"
                  width="55"
                  height="55"
                  loading="lazy"
                />
                 */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655638997/img/gatsby-logo_cpbryq"
                  imgALT="Gatsby logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_30/e_blur:50,f_auto,q_auto/v1655638997/img/gatsby-logo_cpbryq"
                  imgIdName={undefined}
                  elemName="tech-stack-img-container"
                  imgTransparent={true}
                  imgWidth={"55px"}
                  imgHeight={"55px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                />
              </a>
              <a href="https://graphql.org/" target="_blank" rel="noreferrer">
                {/* <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655638997/img/graphql-logo_cbwhil.png"
                  alt="GraphQL logo"
                  width="55"
                  height="55"
                  loading="lazy"
                /> */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655638997/img/graphql-logo_cbwhil"
                  imgALT="GraphQL logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_30/e_blur:50,f_auto,q_auto/v1655638997/img/graphql-logo_cbwhil"
                  imgIdName={undefined}
                  elemName="tech-stack-img-container"
                  imgTransparent={true}
                  imgWidth={"55px"}
                  imgHeight={"55px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                />
              </a>
              <a
                href="https://www.contentful.com/"
                target="_blank"
                rel="noreferrer"
              >
                {/* <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655638997/img/contentful-logo_odnw3o.png"
                  alt="Contentful logo"
                  width="55"
                  height="55"
                  loading="lazy"
                /> */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655638997/img/contentful-logo_odnw3o"
                  imgALT="Contentful logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_30/e_blur:50,f_auto,q_auto/v1655638997/img/contentful-logo_odnw3o"
                  imgIdName={undefined}
                  elemName="tech-stack-img-container"
                  imgTransparent={true}
                  imgWidth={"55px"}
                  imgHeight={"55px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                />
              </a>
              <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                {/* <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655638998/img/sass-logo_w7pevn.png"
                  alt="Sass logo"
                  width="55"
                  height="55"
                  loading="lazy"
                /> */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655638998/img/sass-logo_w7pevn"
                  imgALT="Sass logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_30/e_blur:50,f_auto,q_auto/v1655638998/img/sass-logo_w7pevn"
                  imgIdName={undefined}
                  elemName="tech-stack-img-container"
                  imgTransparent={true}
                  imgWidth={"55px"}
                  imgHeight={"55px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                />
              </a>
              <a
                href="https://www.opencart.com/"
                target="_blank"
                rel="noreferrer"
              >
                {/* <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655638998/img/opencart-logo_tfz8or.png"
                  alt="OpenCart logo"
                  width="55"
                  height="55"
                  loading="lazy"
                /> */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655638998/img/opencart-logo_tfz8or"
                  imgALT="OpenCart logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_30/e_blur:50,f_auto,q_auto/v1655638998/img/opencart-logo_tfz8or"
                  imgIdName={undefined}
                  elemName="tech-stack-img-container"
                  imgTransparent={true}
                  imgWidth={"55px"}
                  imgHeight={"55px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                />
              </a>
              <a
                href="https://www.eventbrite.co.uk/o/arclight-music-28941769095"
                target="_blank"
                rel="noreferrer"
              >
                {/* <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655638997/img/evenbrite-logo_svqkil.png"
                  alt="Eventbrite logo"
                  width="55"
                  height="55"
                  loading="lazy"
                /> */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655638997/img/evenbrite-logo_svqkil"
                  imgALT="Eventbrite logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_30/e_blur:50,f_auto,q_auto/v1655638997/img/evenbrite-logo_svqkil"
                  imgIdName={undefined}
                  elemName="tech-stack-img-container"
                  imgTransparent={true}
                  imgWidth={"55px"}
                  imgHeight={"55px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                />
              </a>
              <a
                href="https://uk.trustpilot.com/review/www.arclightmusic.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                {/* <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655638998/img/trustpilot-logo_lfvejl.png"
                  alt="Trustpilot logo"
                  width="55"
                  height="55"
                  loading="lazy"
                /> */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655638998/img/trustpilot-logo_lfvejl"
                  imgALT="Trustpilot logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_30/e_blur:50,f_auto,q_auto/v1655638998/img/trustpilot-logo_lfvejl"
                  imgIdName={undefined}
                  elemName="tech-stack-img-container"
                  imgTransparent={true}
                  imgWidth={"55px"}
                  imgHeight={"55px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                />
              </a>
              <a
                href="https://marketingplatform.google.com/about/analytics/"
                target="_blank"
                rel="noreferrer"
              >
                {/* <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655638997/img/ga-logo_bfjbun.png"
                  alt="Google Analytics logo"
                  width="55"
                  height="55"
                  loading="lazy"
                /> */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655638997/img/ga-logo_bfjbun"
                  imgALT="Google Analytics logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_30/e_blur:50,f_auto,q_auto/v1655638997/img/ga-logo_bfjbun"
                  imgIdName={undefined}
                  elemName="tech-stack-img-container"
                  imgTransparent={true}
                  imgWidth={"55px"}
                  imgHeight={"55px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                />
              </a>
              <a href="https://www.appzi.com/" target="_blank" rel="noreferrer">
                {/* <img
                  className="border-rd"
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655638997/img/appzi-logo_zegevc.png"
                  alt="Appzi logo"
                  width="55"
                  height="55"
                  loading="lazy"
                /> */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655638997/img/appzi-logo_zegevc"
                  imgALT="Appzi logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_30/e_blur:50,f_auto,q_auto/v1655638997/img/appzi-logo_zegevc"
                  imgIdName={undefined}
                  elemName="tech-stack-img-container icon-border-radius"
                  imgTransparent={true}
                  imgWidth={"55px"}
                  imgHeight={"55px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                />
              </a>
              <a
                href="https://www.hotjar.com/"
                target="_blank"
                rel="noreferrer"
              >
                {/* <img
                  className="border-rd"
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655638998/img/hj-logo_dv7xp4.png"
                  alt="Hotjar logo"
                  width="55"
                  height="55"
                  loading="lazy"
                /> */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655638998/img/hj-logo_dv7xp4"
                  imgALT="Hotjar logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_30/e_blur:50,f_auto,q_auto/v1655638998/img/hj-logo_dv7xp4"
                  imgIdName={undefined}
                  elemName="tech-stack-img-container icon-border-radius"
                  imgTransparent={true}
                  imgWidth={"55px"}
                  imgHeight={"55px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                />
              </a>
              <a href="https://formspree.io/" target="_blank" rel="noreferrer">
                {/* <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655638997/img/formspree-logo_lqona9.png"
                  alt="Formspree logo"
                  width="55"
                  height="55"
                  loading="lazy"
                /> */}
                <AdvancedLazyLoad
                  imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655638997/img/formspree-logo_lqona9"
                  imgALT="Formspree logo"
                  backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_30/e_blur:50,f_auto,q_auto/v1655638997/img/formspree-logo_lqona9"
                  imgIdName={undefined}
                  elemName="tech-stack-img-container"
                  imgTransparent={true}
                  imgWidth={"55px"}
                  imgHeight={"55px"}
                  imgClassName={undefined}
                  containerClassName={undefined}
                />
              </a>
            </div>
            <p style={{ display: "none" }}>
              React | Gatsby | GraphQL | Contentful | Sass | OpenCart |
              Eventbrite API | Trustpilot | Google Analytics | Appzi | Hotjar |
              Formspree
            </p>
          </div>
          <div className="vt-role-summary-container">
            <p className="read-more-text">
              Arclight Music Was Founded In 2019. Arclight Music was created to
              give young musicians the opportunities that are lacking in a
              modern, money hungry music scene to gain experience on stage and
              the chance to showcase themselves in a way they have not been able
              to for years. Also to do our part to keep live music alive by
              promoting young musicians and encouraging the next generation to
              follow a career in music whether it be performing, studio
              management, etc.
            </p>
            <ReadMoreBtn text={"Read More"} />
          </div>
          {/* <div className="vt-role-links">
            <h3>Websites, Designs & Links</h3>
            <div className="vt-role-links__two-wide">
              <div className="vt-role-links-websites">
                <a
                  href="https://www.arclightmusic.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Arclight Music's website"
                >
                  <div className="vt-role-links-websites__arclight-music">
                    <img
                      src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655636754/img/am-text-logo_gyx4pi.png"
                      alt="Arclight Music's logo"
                      width="160"
                      height="59"
                      loading="lazy"
                    />
                  </div>
                </a>
                <a
                  href="https://www.arclightmusic.co.uk/arclight-apparel/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Arclight Apparel's website"
                >
                  <div className="vt-role-links-websites__arclight-apparel">
                    <img
                      src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655636754/img/aa-text-logo_tenpim.png"
                      alt="Arclight Apparel's logo"
                      width="160"
                      height="59"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
              <div className="vt-role-links-other">
                <div className="vt-role-links-other__links">
                  <a
                    href="https://www.figma.com/file/UrJ8rP5ZPKUB66aTE1mvrX/Arclight-Music"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Figma Designs"
                  >
                    <div className="vt-role-links__figma">
                      <img
                        src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655656093/img/figma-logo_z80hhu.png"
                        alt="Figma's logo"
                        width="70"
                        height="70"
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/ArclightMusicUK/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Arclight Music's Facebook page"
                  >
                    <div className="vt-role-links__facebook">
                      <FontAwesomeIcon icon={faFacebookSquare} />
                    </div>
                  </a>
                </div>
                <div className="vt-role-links-other__links">
                  <a
                    href="https://www.instagram.com/ArclightMusicUK/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Arclight Music's Instagram page"
                  >
                    <div className="vt-role-links__instagram">
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC-xvfVCutOb2b44_7uxmisQ"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Arclight Music's YouTube channel"
                  >
                    <div className="vt-role-links__youtube">
                      <FontAwesomeIcon icon={faYoutube} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="vt-role-posters">
            <div className="vt-role-posters__title-container">
              <h3>Recent Posters</h3>
              <Link
                href="/posters"
                className="vt-role-posters-see-more"
                onClick={NavItemToggle}
              >
                See All
              </Link>
            </div>
            <div className="vt-role-links__posters">
              <div className="vt-role-poster">
                <img
                  className="vt-role-poster__poster"
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655640498/img/aug-22_lni7gx.jpg"
                  alt="Rage Against Cancer festival feat Oceans Apart, Dacara, Ohana and many more"
                  width="257"
                  height="364"
                  loading="lazy"
                />
                <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
                </div>
              </div>
              <div className="vt-role-poster">
                <img
                  className="vt-role-poster__poster"
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655640498/img/sept-22_oioeam.jpg"
                  alt="Lightwave feat Nextyear and Heartsink"
                  width="257"
                  height="364"
                  loading="lazy"
                />
                <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
                </div>
              </div>
              <div className="vt-role-poster">
                <img
                  className="vt-role-poster__poster"
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655640499/img/may-22_g5h9ym.jpg"
                  alt="2000's Emo Throwback and Ambush After Party feat Alignments, Decay the Ocean and Until You Disappear"
                  width="257"
                  height="364"
                  loading="lazy"
                />
                <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
                </div>
              </div>
              <div className="vt-role-poster">
                <img
                  className="vt-role-poster__poster"
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655640499/img/apr-22_glwdrt.jpg"
                  alt="The Relaunch Party feat Out City Fires, Scumbag Lion, Chambersm Ohana and many more"
                  width="257"
                  height="364"
                  loading="lazy"
                />
                <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
                </div>
              </div>
            </div>
          </div> */}
        </section>
        <div className="custom-divider"></div>
        <section className="portfolio-container__api-container">
          <header className="subheading-container">
            <h2>More</h2>
          </header>
          <div className="apis-container">
            <div className="api-container">
              <AppleWatch />
              <div className="api-container__badge">
                <p>API Example (LIVE)</p>
              </div>
            </div>
            <div className="api-container">
              <a
                href="https://github.com/Lloydsibson"
                target="_blank"
                rel="noreferrer"
                aria-label="Github Account"
              >
                <div className="api-container__portfolio-link github">
                  {/* <img
                    src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655656093/img/GitHub-logo_noc0g4.png"
                    alt="Github's logo"
                    width="100"
                    height="100"
                    loading="lazy"
                  /> */}
                  <AdvancedLazyLoad
                    imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655656093/img/GitHub-logo_noc0g4"
                    imgALT="Github's logo"
                    backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_50/e_blur:100,f_auto,q_auto/v1655656093/img/GitHub-logo_noc0g4"
                    imgIdName={undefined}
                    elemName="api-container-img-container"
                    imgTransparent={true}
                    imgWidth={"100px"}
                    imgHeight={"100px"}
                    imgClassName={undefined}
                    containerClassName={undefined}
                  />
                </div>
              </a>
            </div>
            <div className="api-container">
              <a
                href="https://codepen.io/lloydsibson/"
                target="_blank"
                rel="noreferrer"
                aria-label="CodePen account"
              >
                <div className="api-container__portfolio-link codepen">
                  {/* <img
                    src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655656093/img/codepen-logo_lvevhg.png"
                    alt="Codepen's logo"
                    width="100"
                    height="100"
                    loading="lazy"
                  /> */}
                  <AdvancedLazyLoad
                    imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655656093/img/codepen-logo_lvevhg"
                    imgALT="Codepen's logo"
                    backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_50/e_blur:100,f_auto,q_auto/v1655656093/img/codepen-logo_lvevhg"
                    imgIdName={undefined}
                    elemName="api-container-img-container"
                    imgTransparent={true}
                    imgWidth={"100px"}
                    imgHeight={"100px"}
                    imgClassName={undefined}
                    containerClassName={undefined}
                  />
                </div>
              </a>
            </div>
            <div className="api-container">
              <a
                href="https://www.figma.com/file/kSUletznveK6k1NFJDhrUR/Monocode-Portfolio?node-id=0%3A1"
                target="_blank"
                rel="noreferrer"
                aria-label="Figma Account"
              >
                <div className="api-container__portfolio-link figma">
                  {/* <img
                    src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655656093/img/figma-logo_z80hhu.png"
                    alt="Figma's logo"
                    width="100"
                    height="100"
                    loading="lazy"
                  /> */}
                  <AdvancedLazyLoad
                    imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1655656093/img/figma-logo_z80hhu"
                    imgALT="Figma's logo"
                    backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_50/e_blur:100,f_auto,q_auto/v1655656093/img/figma-logo_z80hhu"
                    imgIdName={undefined}
                    elemName="api-container-img-container"
                    imgTransparent={true}
                    imgWidth={"100px"}
                    imgHeight={"100px"}
                    imgClassName={undefined}
                    containerClassName={undefined}
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* <Lightbox /> */}
    </>
  );
};

export default PortfolioPage;
