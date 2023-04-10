import "../App.scss";
import "./LazyLoadingIcon.scss";

const LazyLoadingIcon = () => {
  return (
    <div className="lazy-loading-spinner-container">
      <div className="spinner-background"></div>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  );
};

export default LazyLoadingIcon;
