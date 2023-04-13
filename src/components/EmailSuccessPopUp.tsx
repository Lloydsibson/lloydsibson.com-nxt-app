import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const EmailSuccessPopUp = () => {
  return (
    <div className="email-success-container">
      <FontAwesomeIcon icon={faCircleCheck} />
      <div className="email-success-container__message">
        <p className="title">Success</p>
        <p className="message">Your message has been sent</p>
      </div>
    </div>
  );
};
