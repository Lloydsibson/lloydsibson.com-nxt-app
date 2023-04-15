import Link from "next/link";
import Head from "next/head";
// import CvTwoPage from "../static/lloyd-sibson-ba-front-end-developer-cv-2021.pdf";
import VideoBackground from "../components/VideoBackground";
import { HPCarousel } from "../components/HPCarousel";

import Image from "next/image";
import logoBackground from "/public/assets/logo-homepage.png";

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

  return (
    <>
      <Head>
        <title>
          Lloyd Sibson BA | Front-End Web Developer & UI/UX Designer
        </title>
        <meta
          name="description"
          content="Developer at NEXT with over 5+ years commerical experience | Worked with 200+ brands such as Rolex, Nike, Gucci & Adidas | Founder of Monocode & UI Developer at Arclight Music."
        />
      </Head>
      <VideoBackground />
      <section className="homepage container">
        <div className="homepage-container__text-container">
          <div className="text-inner-container">
            <div className="hp-image"></div>
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
                <Link href="/contact" className="contact">
                  Get a <span>FREE</span> quote today!
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
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1620401501/img/logo-homepage.png"
            alt="Monocode Logo"
          /> */}
          <Image
            className="html-video-container__img"
            src={logoBackground}
            alt="Monocode Logo"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
