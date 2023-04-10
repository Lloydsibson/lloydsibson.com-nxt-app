import "../styles/global.scss";
import "../components/Nav.scss";
import "../components/Footer.scss";
import "../components/CookieConsent.scss";
import "../components/LDToggle.scss";
import "../components/VideoBackground.scss";
import "../components/ReadMore.scss";
import "../components/Clients.scss";
import "../components/BackToTop.scss";

import "./index.scss";
import "./about.scss";

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
      {/* <MobileNav /> */}
    </>
  );
}
