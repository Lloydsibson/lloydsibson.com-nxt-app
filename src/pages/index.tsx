import Link from "next/link";
import Head from "next/head";
// import CvTwoPage from "../static/lloyd-sibson-ba-front-end-developer-cv-2021.pdf";
//import VideoBackground from "../components/VideoBackground";
import { VantaBackground } from "../components/VantaBackground";
import { HPCarousel } from "../components/HPCarousel";
import { useEffect } from "react";

import { AdvancedLazyLoad } from "@/components/AdvancedLazyLoad";

// import Image from "next/image";
// import logoBackground from "/public/assets/logo-homepage.png";
//
// SEO

// GA-4
// import ReactGA from "react-ga4";

const HomePage = () => {
  // const HomeLink = () => {
  //   document.body.scrollTop = 0; // For Safari
  //   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  // };

  // const handleGetFreeQuoteTodayBtn = (e: any) => {
  //   // // Send a custom event
  //   ReactGA.event({
  //     category: "lloydsibson.com",
  //     action: "Click",
  //     label: `HP | Clicked | Get a FREE Quote Today!`, // optional
  //     // value: 99, // optional, must be a number
  //     // nonInteraction: true, // optional, true/false
  //     // transport: "xhr", // optional, beacon/xhr/image
  //   });
  // };

  useEffect(() => {
    // Add or remove classes to the body element based on the page being viewed
    document.body.classList.add("home-page"); // Add your desired class here

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

    // Return a cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("home-page"); // Remove the class when the component unmounts

      // AdvancedLazyLoad
      blurredImageDivs.forEach((div) => {
        const img = div.querySelector("img");
        if (img) {
          img.removeEventListener("load", handleImageLoad);
        }
      });
    };
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  return (
    <>
      <Head>
        <title>Lloyd Sibson BA | Front-End Web Developer & Designer</title>
        <meta
          name="description"
          content="Developer at NEXT with over 5+ years commerical experience | Worked with 200+ brands such as Rolex, Nike, Gucci & Adidas | Founder of Monocode & UI Developer at Arclight Music."
        />
      </Head>
      <VantaBackground />
      {/* <VideoBackground /> */}

      <section className="homepage container">
        <div className="homepage-container__text-container">
          <div className="text-inner-container">
            {/* <div className="hp-image"></div> */}
            {/* url("https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1620401501/img/logo-homepage") */}
            <AdvancedLazyLoad
              imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1620401501/img/logo-homepage"
              imgALT="Home page logo"
              backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_100/e_blur:100,f_auto,q_auto/v1620401501/img/logo-homepage"
              imgIdName={undefined}
              elemName="hp-desktop-logo"
              imgTransparent={true}
              imgWidth={undefined}
              imgHeight={undefined}
              imgClassName={undefined}
              containerClassName="hp-image"
              loadingAttr={undefined}
            />
            <h1>
              Front End <span>Dev & Designer</span>
            </h1>
            <div id="type-text">
              <HPCarousel />
            </div>
          </div>
          <div className="text-inner-other-container">
            <h3>Founder of Monocode</h3>
            <p>
              I&apos;ve worked with over 200+ brands such as Rolex, Nike, Gucci
              & Adidas. Founder of Monocode & UI Developer at Arclight Music.
              Supercharge your brand into its best digital self.
            </p>
            <div className="btn-container">
              <div
                className="btn-primary" // onClick={(e) => handleGetFreeQuoteTodayBtn(e)}
              >
                {/* <Link href="/contact" className="vwp contact">
                  Get a <span>FREE</span> quote today!
                </Link> */}
                <Link href="/portfolio" className="portfolio">
                  Explore My Work
                </Link>
                {/* <a href={CvTwoPage} download>
                  Download CV
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-container__image-container">
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1620401501/img/logo-homepage.png"
            alt="Monocode Logo"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1620401501/img/logo-homepage"
            imgALT="Monocode Logo"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_13/e_blur:75,f_auto,q_auto/v1620401501/img/logo-homepage"
            elemName="homepage-mobile-logo"
            imgIdName={undefined}
            imgTransparent={true}
            imgWidth={"200px"}
            imgHeight={"200px"}
            imgClassName={undefined}
            containerClassName={undefined}
            loadingAttr="lazy"
          />
          {/* <Image
            className="html-video-container__img"
            src={logoBackground}
            alt="Monocode Logo"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            placeholder="blur" // Optional blur-up while loading
          /> */}
        </div>
      </section>
    </>
  );
};

export default HomePage;
