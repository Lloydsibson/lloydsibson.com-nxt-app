import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";

import { Nav } from "../components/Nav";
import { MobileNav } from "../components/MobileNav";
import CookieConsent from "../components/CookieConsent";
import { Footer } from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CookieConsent />
      <div className="page-scroll">
        <div className="page-container">
          <Nav />
          <main>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
          <Footer />
        </div>
      </div>
      <MobileNav />
    </>
  );
}

// GLOBAL
import "../styles/global.scss";

// THEMES
import "../themes/light.scss";

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
