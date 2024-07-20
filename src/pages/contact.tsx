import Head from "next/head";
import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
// import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { EmailForm } from "../components/EmailForm";
import { Testimonials } from "../components/Testimonials";

const ContactPage = () => {
  const currentDate: any = new Date();

  useEffect(() => {
    document.body.classList.add("contact-page"); // Add your desired class here

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
      document.body.classList.remove("contact-page"); // Remove the class when the component unmounts

      // AdvancedLazyLoad
      blurredImageDivs.forEach((div) => {
        const img = div.querySelector("img");
        if (img) {
          img.removeEventListener("load", handleImageLoad);
        }
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Reach out and see what other clients, colleagues and companies have to say"
        />
      </Head>
      <section className="page-title-container">
        <header>
          <h1>Contact</h1>
        </header>
        <p>Lets Chat ☕</p>
      </section>
      <Testimonials />
      <div className="content-container">
        <aside className="content-container__contact-details-container">
          <header className="subheading-container">
            <h2>Why Hire Me?</h2>
          </header>
          <div className="contact-cta-container">
            <div className="contact-cta-container__icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="contact-cta-container__text">
              <h3>Website Development</h3>
              <p>
                {`${currentDate.getFullYear() - 2016}+`}
                {` `}
                years of commercial experience within small, medium and
                enterprise level businesses.
                {/* <a
                  href="https://api.whatsapp.com/send?phone=447462944899"
                  aria-label="Message via Whatsapp"
                >
                  Open in WhatsApp
                </a> */}
              </p>
            </div>
          </div>
          <div className="contact-cta-container">
            <div className="contact-cta-container__icon">
              <FontAwesomeIcon icon={faPencil} />
            </div>
            <div className="contact-cta-container__text">
              <h3>UI/UX + Graphic Design</h3>
              <p>
                Graduated with a 2:1 from De Montfort University - a leading UK
                university for Art & Design.
              </p>
            </div>
          </div>
          <div className="contact-cta-container">
            <div className="contact-cta-container__icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <div className="contact-cta-container__text">
              <h3>CRO Testing</h3>
              <p>
                {`${currentDate.getFullYear() - 2019}+`}
                {` `} years in A/B testing, multivariate testing, machine
                learning, optimisation and personalisation.
              </p>
            </div>
          </div>
        </aside>
        <section className="content-container__message-container">
          <header className="subheading-container">
            <h2>How Can I Help You?</h2>
          </header>
          <EmailForm />
        </section>
      </div>
    </>
  );
};

export default ContactPage;
