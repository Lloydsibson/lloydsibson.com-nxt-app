import { useState, useEffect } from "react";

import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";

import { Nav } from "../components/Nav";
import { MobileNav } from "../components/MobileNav";
import CookieConsent from "../components/CookieConsent";
import { Footer } from "../components/Footer";

import { Poppins } from "next/font/google";

const PoppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["devanagari", "latin", "latin-ext"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // RUN FUNCTION ONCE PAGE HAS FULLY LOADED
    function ready(callbackFunc: any) {
      if (document.readyState === "complete") {
        // Document is already ready, call the callback directly
        callbackFunc();
        // ASCII ART & MESSAGE
        console.log(`
        ██╗     ██╗      ██████╗ ██╗   ██╗██████╗     ███████╗██╗██████╗ ███████╗ ██████╗ ███╗   ██╗
        ██║     ██║     ██╔═══██╗╚██╗ ██╔╝██╔══██╗    ██╔════╝██║██╔══██╗██╔════╝██╔═══██╗████╗  ██║
        ██║     ██║     ██║   ██║ ╚████╔╝ ██║  ██║    ███████╗██║██████╔╝███████╗██║   ██║██╔██╗ ██║
        ██║     ██║     ██║   ██║  ╚██╔╝  ██║  ██║    ╚════██║██║██╔══██╗╚════██║██║   ██║██║╚██╗██║
        ███████╗███████╗╚██████╔╝   ██║   ██████╔╝    ███████║██║██████╔╝███████║╚██████╔╝██║ ╚████║
        ╚══════╝╚══════╝ ╚═════╝    ╚═╝   ╚═════╝     ╚══════╝╚═╝╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝
                                                                                                    
        `);
      } else {
        setTimeout(() => {
          ready(callbackFunc);
        }, 100);
      }
    }

    ready(function () {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className={PoppinsFont.className}>
        <CookieConsent />
      </div>
      <div className={`page-scroll ${PoppinsFont.className}`}>
        <div className="page-container">
          <Nav />
          <main>
            <Layout>
              <Component {...pageProps} />
              <Analytics />
            </Layout>
          </main>
          <Footer />
        </div>
      </div>
      <div className={PoppinsFont.className}>
        <MobileNav />
      </div>
      <div className={`loading-screen ${isLoading ? "-show" : "-hide"}`}>
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </>
  );
}

// GLOBAL
import "../styles/global.scss";

// THEMES
import "../themes/Light.scss";

// PAGES
import "../styles/index.scss";
import "../styles/about.scss";
import "../styles/portfolio.scss";
import "../styles/contact.scss";
import "../styles/posters.scss";

// COMPONENTS
import "../components/Nav.scss";
import "../components/Footer.scss";
import "../components/CookieConsent.scss";
import "../components/LDToggle.scss";
import "../components/VideoBackground.scss";
import "../components/ReadMore.scss";
import "../components/Clients.scss";
import "../components/BackToTop.scss";
import "../components/PagePositionScrollBar.scss";
import "../components/MobileNav.scss";
import "../components/HPCarousel.scss";
import "../components/EmailForm.scss";
import "../components/EmailSuccessPopUp.scss";
import "../components/Testimonials.scss";
import "../components/LazyLoadingIcon.scss";
