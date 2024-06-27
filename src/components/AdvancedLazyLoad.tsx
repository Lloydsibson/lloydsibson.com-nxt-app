import { useEffect } from "react";

interface Props {
  imgURL: string;
  imgALT: string;
  backgroundImg: string;
  elemName: string;
  imgIdName: string | undefined;
  imgTransparent: boolean;
  imgWidth: string | undefined;
  imgHeight: string | undefined;
  containerClassName: string | undefined;
  imgClassName: string | undefined;
}

export const AdvancedLazyLoad = ({
  imgURL,
  imgALT,
  backgroundImg,
  elemName,
  imgIdName,
  imgTransparent,
  imgWidth,
  imgHeight,
  imgClassName,
  containerClassName,
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
      } ${containerClassName ? containerClassName : ""}`}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <img
        id={imgIdName}
        src={imgURL}
        loading="lazy"
        alt={imgALT}
        width={imgWidth ? imgWidth : undefined}
        height={imgHeight ? imgHeight : undefined}
        className={imgClassName ? imgClassName : undefined}
      />
    </div>
  );
};
