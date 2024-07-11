// import { useSelector } from "react-redux";
import { AdvancedLazyLoad } from "./AdvancedLazyLoad";
import { useSelector } from "react-redux";

// import scrapedData from "../../scrapedData.json";

export const GoogleNewsApi = () => {
  // ACCESS STATE FROM REDUX STORE
  const { ApiGoogleNewsWOSState } = useSelector(
    (state: any) => state.ApiGoogleNewsWOSStore
  );

  // const wosBingNews = scrapedData[1].data[0];
  // const wosBingNewsLink = scrapedData[1].data[1];

  return (
    <div className="google-news-wos">
      <div className="google-news-wos__card">
        <div className="google-news-title">
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
            // href={wosBingNewsLink}
            className="news-link"
            target="_blank"
            rel="noreferrer"
          >
            <p className="news-title">{ApiGoogleNewsWOSState.googleNews}</p>
            {/* <p className="news-title">{wosBingNews}</p> */}
          </a>
        </div>
      </div>
    </div>
  );
};
