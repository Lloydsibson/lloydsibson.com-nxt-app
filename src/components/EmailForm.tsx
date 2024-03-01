import { useState } from "react";
import { EmailSuccessPopUp } from "./EmailSuccessPopUp";
//import Recaptcha from "react-google-recaptcha";
// FORMSPREE
import { useForm } from "@formspree/react";

export const EmailForm = () => {
  // STATE FOR FORMS
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");
  // const [formContactType, setFormContactType] = useState("Who You Are?");
  // const [formInterestedIn, setFormInterestedIn] = useState(
  //   "Interested In? (Optional)"
  // );

  // GOOGLE CAPTCHA - KEYS ALSO IN NETLIFY ENVIRONMENT VARIBLE
  // https://docs.netlify.com/forms/spam-filters/#recaptcha-2-challenge
  //const RECAPTCHA_SITE_KEY = "6Ldq0dcaAAAAAAVvxfX_Etiggl5ORlQjVvDofzeA";
  const [buttonDisabled, setButtonDisabled] = useState(true);
  //
  const [state, handleSubmit] = useForm("mrgorgwn");

  if (state.succeeded) {
    return <EmailSuccessPopUp />;
  }

  const checkCheckBox = (e: any) => {
    const contactFormPrivacyPolicy = document.getElementById("form-pp");
    const formPPContainer = document.querySelector(".form-pp-container");
    if (e.currentTarget.checked === true) {
      //console.log("true");
      (contactFormPrivacyPolicy as HTMLInputElement).value += "Accepted";
      formPPContainer!.classList.remove("error");
      if (
        formName !== "" &&
        formEmail !== "" &&
        formSubject !== "" &&
        formMessage !== ""
      ) {
        setButtonDisabled(false);
      }
    } else {
      //console.log("false");
      (contactFormPrivacyPolicy as HTMLInputElement).value = "";
      setButtonDisabled(true);
    }
  };
  // const onSubmitCheckForm = (e: any) => {
  //   const contactFormPrivacyPolicy = document.getElementById("form-pp");
  //   const formPPContainer = document.querySelector(".form-pp-container");

  //   if ((contactFormPrivacyPolicy as HTMLInputElement).value === "Accepted") {
  //   } else {
  //     formPPContainer!.classList.add("error");
  //     e.preventDefault();
  //   }
  // };

  const resetForm = () => {
    // RESETS FORM FIELDS - UPDATES STATE
    const formPPCheckbox = document.querySelector(".form-pp-container input");
    setFormName("");
    setFormEmail("");
    setFormSubject("");
    // setFormContactType("Who You Are?");
    // setFormInterestedIn("Interested In? (Optional)");
    setFormMessage("");
    (formPPCheckbox as HTMLInputElement).checked = false;
  };

  const handleNameChange = (e: any) => {
    setFormName(e.target.value);
  };
  const handleEmailChange = (e: any) => {
    setFormEmail(e.target.value);
  };
  // const handleContactTypeChange = (e) => {
  //   setFormContactType(e.target.value);
  // };

  // const handleInterestedInChange = (e) => {
  //   setFormInterestedIn(e.target.value);
  // };

  const handleSubjectChange = (e: any) => {
    setFormSubject(e.target.value);
  };

  const handleMessageChange = (e: any) => {
    setFormMessage(e.target.value);
  };
  return (
    <div className="email-form-container">
      <form
        name="contact-form"
        method="post"
        // data-netlify="true"
        // data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
        // action="https://formspree.io/f/mrgorgwn"
      >
        {/* NETLIFY FORM */}
        <input type="hidden" name="form-name" value="contact-form" />
        {/* ---- */}
        <div className="fs-contact-form-container__inner-container">
          <div className="contact-info-container">
            <label>
              Name:
              <input
                required
                type="text"
                name="name"
                autoComplete="on"
                placeholder="Full Name"
                onChange={(e) => handleNameChange(e)}
                value={formName}
              />
            </label>

            <label>
              Email:
              <input
                required
                type="email"
                name="email"
                autoComplete="on"
                // name="_replyto"
                placeholder="Email Address"
                onChange={(e) => handleEmailChange(e)}
                value={formEmail}
              />
            </label>

            {/* <select
            name="contact-type"
            required
            onChange={(e) => handleContactTypeChange(e)}
            value={formContactType}
          >
            <option disabled>Who You Are?</option>
            <option value="New Client">New Client</option>
            <option value="Existing Client">Existing Client</option>
            <option value="Recruiter">Recruiter</option>
            <option value="Other">Other</option>
          </select> */}

            {/* <select
            name="interested-in"
            onChange={(e) => handleInterestedInChange(e)}
            value={formInterestedIn}
          >
            <option disabled>Interested In? (Optional)</option>
            <option value="Web Development">Web Development</option>
            <option value="Web Design">Web Design</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Other">Other</option>
          </select> */}

            {/* <label>
      Budget:
      <input
        type="text"
        name="budget"
        placeholder="Budget (Optional)"
      ></input>
    </label> */}
            <label>
              Subject:
              <input
                required
                type="text"
                name="subject"
                spellCheck="true"
                placeholder="Subject"
                onChange={(e) => handleSubjectChange(e)}
                value={formSubject}
              />
            </label>
          </div>
          <input type="text" name="privacy-policy" id="form-pp" hidden />
          {/* <input type="text" name="_gotcha" hidden /> */}

          <div className="contact-message-container">
            <label>
              Message:
              <textarea
                required
                name="message"
                placeholder="Message"
                spellCheck="true"
                onChange={(e) => handleMessageChange(e)}
                value={formMessage}
              />
            </label>
          </div>
        </div>

        <div className="v-container">
          {/* <Recaptcha
            sitekey={RECAPTCHA_SITE_KEY}
            size="normal"
            theme="light"
            tabindex={0}
            id="recaptcha-google"
            onChange={() => setButtonDisabled(false)}
            // callback={}
            onExpired={() => setButtonDisabled(true)}
            onErrored={() => setButtonDisabled(true)}
          /> */}

          {/* CUSTOM CHECKBOX FOR PP */}
          <div className="form-pp-container">
            <label className="control checkbox">
              <input type="checkbox" onChange={(e) => checkCheckBox(e)} />
              <span className="control-indicator"></span>
              <p>
                I understand that FormSpree will securely hold my data in
                accordance with their{" "}
                <a
                  href="https://formspree.io/legal/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  privacy policy
                </a>
                .
              </p>
            </label>
          </div>
        </div>

        <div className="submit-container">
          <button
            className="btn-primary-two"
            type="submit"
            //disabled={state.submitting}
            disabled={buttonDisabled}
          >
            Send Message
          </button>
          <div
            className="reset-form"
            role="button"
            tabIndex={0}
            onKeyDown={resetForm}
            onClick={resetForm}
          >
            Clear Form
          </div>
        </div>
      </form>
    </div>
  );
};
