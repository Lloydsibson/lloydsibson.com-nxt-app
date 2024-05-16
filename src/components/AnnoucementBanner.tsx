// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface Props {
  viewport: string;
}

export const AnnouncementBanner = ({ viewport }: Props) => {
  return (
    <div className={`announcement-banner-container ${viewport}`}>
      <p className="announcement-banner-container__message">
        &#127881; Recently Completed:&nbsp;
        <a target="_blank" href="https://digitalaccessibilitytraining.org">
          DAC Certificate for Accessible Awareness & Understanding
        </a>
      </p>
    </div>
  );
};
