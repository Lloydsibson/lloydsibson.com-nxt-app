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
      href="https://digitalaccessibilitytraining.org"
    >
      <p className="announcement-banner-container__message">
        &#127881; Recently Completed:&nbsp;
        <span>DAC Certificate for Accessible Awareness & Understanding</span>
      </p>
    </a>
  );
};
