import { useEffect } from "react";
//import { AdvancedLazyLoad } from "@/components/AdvancedLazyLoad";

const PostersPage = () => {
  useEffect(() => {
    document.body.classList.add("poster-page"); // Add your desired class here

    // AdvancedLazyLoad
    const blurredImageDivs = document.querySelectorAll(".blurred-img");

    const handleImageLoad = (e: any) => {
      e.currentTarget.closest(".blurred-img").classList.add("loaded");
    };

    blurredImageDivs.forEach((div) => {
      const img = div.querySelector("img");
      if (img) {
        if (img.complete) {
          div.classList.add("loaded");
        } else {
          img.addEventListener("load", handleImageLoad);
        }
      }
    });
    return () => {
      document.body.classList.remove("poster-page"); // Remove the class when the component unmounts

      // AdvancedLazyLoad
      blurredImageDivs.forEach((div) => {
        const img = div.querySelector("img");
        if (img) {
          img.removeEventListener("load", handleImageLoad);
        }
      });
    };
  }, []);
  return (
    <>
      <div className="page-title-container">
        <h1>Posters</h1>
        <p>All Event Posters</p>
      </div>
      <div className="posters-container">
        <div className="posters-container__inner-container">
          <div className="poster">
            <img
              src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1642023959/img/posters/a4-poster-ohana_oy5apb.jpg"
              alt="ohana headliner"
              width="285"
              height="403"
              loading="lazy"
            />
          </div>
          <div className="poster">
            <img
              src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1642023958/img/posters/a4-poster-adf_cpfgyg.jpg"
              alt="as december falls headliner"
              width="285"
              height="403"
              loading="lazy"
            />
          </div>
          <div className="poster">
            <img
              src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1642023958/img/posters/a4-poster-botb_m5ntw2.jpg"
              alt="battle of the bands 2021 event"
              width="285"
              height="403"
              loading="lazy"
            />
          </div>
          <div className="poster">
            <img
              src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1642023957/img/posters/a4-poster-halloween-2021_q1gt94.jpg"
              alt="halloween 2021 event"
              width="285"
              height="403"
              loading="lazy"
            />
          </div>
          <div className="poster">
            <img
              src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1642023959/img/posters/a4-poster-metal-mayhem_ysul9u.jpg"
              alt="infirm of purpose headliner"
              width="285"
              height="403"
              loading="lazy"
            />
          </div>
          <div className="poster">
            <img
              src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1642023958/img/posters/a4-poster-reawaken_ladxt1.jpg"
              alt="reawaken headliner"
              width="285"
              height="403"
              loading="lazy"
            />
          </div>
          <div className="poster">
            <img
              src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1642023957/img/posters/a4-poster-joe-doyle_qj89bt.jpg"
              alt="joe doyle headliner"
              width="285"
              height="403"
              loading="lazy"
            />
          </div>
          <div className="poster">
            <img
              src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1642023958/img/posters/a4-poster-wishing-wolf_cudkop.jpg"
              alt="wishing wolf headliner"
              width="285"
              height="403"
              loading="lazy"
            />
          </div>
          <div className="poster">
            <img
              src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1642023957/img/posters/a4-poster-crosslight_lhwhfw.jpg"
              alt="crosslight headliner"
              width="285"
              height="403"
              loading="lazy"
            />
          </div>
          <div className="poster">
            <img
              src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1642023958/img/posters/a4-poster-sof_lq4tgi.jpg"
              alt="save our farm event"
              width="285"
              height="403"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostersPage;
