import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
              <a
                href="https://api.whatsapp.com/send?phone=447462944899"
                aria-label="Message me on Whatsapp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
            <div className="contact-cta-container__text">
              <h3>WhatsApp</h3>
              <p>
                Instant message me for a faster response time.&nbsp;
                <a
                  href="https://api.whatsapp.com/send?phone=447462944899"
                  aria-label="Message via Whatsapp"
                >
                  Open in WhatsApp
                </a>
              </p>
            </div>
          </div>
          <div className="contact-cta-container">
            <div className="contact-cta-container__icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="contact-cta-container__text">
              <h3>Leicester, UK</h3>
              <p>
                Located in the East Midlands. Open to projects and remote roles
                - UK wide.
              </p>
            </div>
          </div>
          <div className="contact-cta-container">
            <div className="contact-cta-container__icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact-cta-container__text">
              <h3>Email</h3>
              <p>
                Just fill out the email form. I aim to respond to all enquiries
                within 3 working days.
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
