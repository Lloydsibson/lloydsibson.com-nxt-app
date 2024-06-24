import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
// import { faTag } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { EmailForm } from "../components/EmailForm";
import { Testimonials } from "../components/Testimonials";

const ContactPage = () => {
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
          <div className="contact-cta-container">
            <div className="contact-cta-container__icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="contact-cta-container__text">
              <h3>Website Development</h3>
              <p>
                5+ years commercial experience within small, medium and
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
              <h3>UI & Graphic Design</h3>
              <p>
                Graduated with a 2:1 from De Montfort University - a leading UK
                university for Art & Design.
              </p>
            </div>
          </div>
          {/* <div className="contact-cta-container">
            <div className="contact-cta-container__icon">
              <FontAwesomeIcon icon={faTag} />
            </div>
            <div className="contact-cta-container__text">
              <h3>Upto 50% Off</h3>
              <p>
                This offer is for new clients only. Please email me with your
                requirements for a FREE quote.
              </p>
            </div>
          </div> */}
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
