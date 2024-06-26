import { useSelector } from "react-redux";
import { AdvancedLazyLoad } from "./AdvancedLazyLoad";

export const GoogleNewsApi = () => {
  // ACCESS STATE FROM REDUX STORE
  const { ApiGoogleNewsWOSState } = useSelector(
    (state: any) => state.ApiGoogleNewsWOSStore
  );

  return (
    <div className="google-news-wos">
      <div className="google-news-wos__card">
        <div className="google-news-title">
          {/* <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1599594465/img/google-news-icon.png"
            alt="Google News Icon"
            title="Google News"
            width="25"
            height="20"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1599594465/img/google-news-icon"
            imgALT="Google News Icon"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_10/e_blur:10,f_auto,q_auto/v1599594465/img/google-news-icon"
            imgIdName={undefined}
            elemName="google-news-img-container"
            imgTransparent={true}
            imgWidth={"25px"}
            imgHeight={"20px"}
            imgClassName={undefined}
            containerClassName={undefined}
          />
          News
        </div>
        <div className="new-info-container">
          <a
            href={ApiGoogleNewsWOSState.googleLink}
            className="news-link"
            target="_blank"
            rel="noreferrer"
          >
            <p className="news-title">{ApiGoogleNewsWOSState.googleNews}</p>
          </a>
        </div>
      </div>
    </div>
  );
};
