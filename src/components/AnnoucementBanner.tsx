// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface Props {
  viewport: string;
}

export const AnnouncementBanner = ({ viewport }: Props) => {
  return (
    <a
      className={`announcement-banner-container ${viewport}`}
      target="_blank"
      href="https://www.instagram.com/lloydsibson"
    >
      <p className="announcement-banner-container__message">
        ⬆️&nbsp;&nbsp;1,750 Followers Reached:&nbsp;
        <span>Instagram</span>
      </p>
    </a>
  );
};
