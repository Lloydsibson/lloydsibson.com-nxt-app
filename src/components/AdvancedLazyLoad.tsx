import { useEffect } from "react";

interface Props {
  imgURL: string;
  imgALT: string;
  backgroundImg: string;
  elemName: string;
  imgTransparent: boolean;
  imgWidth: string;
  imgHeight: string;
}

export const AdvancedLazyLoad = ({
  imgURL,
  imgALT,
  backgroundImg,
  elemName,
  imgTransparent,
  imgWidth,
  imgHeight,
}: Props) => {
  useEffect(() => {
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

    // Cleanup function to remove event listeners
    return () => {
      blurredImageDivs.forEach((div) => {
        const img = div.querySelector("img");
        if (img) {
          img.removeEventListener("load", handleImageLoad);
        }
      });
    };
  }, []);

  return (
    <div
      className={`advlazyload-container blurred-img ${elemName} ${
        imgTransparent ? "img-clear" : ""
      }`}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <img
        src={imgURL}
        loading="lazy"
        alt={imgALT}
        width={imgWidth}
        height={imgHeight}
      />
    </div>
  );
};
