import Head from "next/head";
import Script from "next/script";

import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";

import { Nav } from "../components/Nav";
import { MobileNav } from "../components/MobileNav";
import CookieConsent from "../components/CookieConsent";
import { ClientsCurrentsTime } from "@/components/ClientsCurrentTime";
import { Footer } from "../components/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next";

// import { Poppins } from "next/font/google";

// const PoppinsFont = Poppins({
//   weight: ["100", "300", "400", "500", "600", "700"],
//   style: ["normal", "italic"],
//   subsets: ["devanagari", "latin", "latin-ext"],
// });

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // RUN FUNCTION ONCE PAGE HAS FULLY LOADED
    function ready(callbackFunc: any) {
      if (document.readyState === "complete") {
        // Document is already ready, call the callback directly
        callbackFunc();
        // ASCII ART & MESSAGE
        // console.log(`
        // ██╗     ██╗      ██████╗ ██╗   ██╗██████╗     ███████╗██╗██████╗ ███████╗ ██████╗ ███╗   ██╗
        // ██║     ██║     ██╔═══██╗╚██╗ ██╔╝██╔══██╗    ██╔════╝██║██╔══██╗██╔════╝██╔═══██╗████╗  ██║
        // ██║     ██║     ██║   ██║ ╚████╔╝ ██║  ██║    ███████╗██║██████╔╝███████╗██║   ██║██╔██╗ ██║
        // ██║     ██║     ██║   ██║  ╚██╔╝  ██║  ██║    ╚════██║██║██╔══██╗╚════██║██║   ██║██║╚██╗██║
        // ███████╗███████╗╚██████╔╝   ██║   ██████╔╝    ███████║██║██████╔╝███████║╚██████╔╝██║ ╚████║
        // ╚══════╝╚══════╝ ╚═════╝    ╚═╝   ╚═════╝     ╚══════╝╚═╝╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝

        // `);
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
      {/* NEXT.JS SPEED INSIGHTS */}
      <SpeedInsights />
      {/* ---------- */}
      <Head>
        {/* FONT FAMILY ADDED */}
        {/* <style jsx global>{`
          body {
            font-family: ${PoppinsFont};
          }
        `}</style> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Provider store={store}>
        <ClientsCurrentsTime />
        <CookieConsent />
        <div className={`page-scroll`}>
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
        <MobileNav />
        <div className={`loading-screen ${isLoading ? "-show" : "-hide"}`}>
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </Provider>
      {/* TAWK.TO CHAT WIDGET */}
      {/* LIVE CHAT COLOR: #02B3A1 */}
      <Script id="tawk" strategy="lazyOnload">
        {`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/668d81f67a36f5aaec96679e/1i2cc7aon';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
`}
      </Script>
      {/* END */}
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
import "../components/CalcDiffTwoDates.scss";
import "../components/AppleWatch.scss";
import "../components/AnnoucementBanner.scss";
import "../components/GitHubBadges.scss";
import "../components/AdvancedLazyLoad.scss";
