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
  loadingAttr: "lazy" | "eager" | undefined;
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
  loadingAttr,
}: Props) => {
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
        loading={loadingAttr ? "lazy" : undefined}
        alt={imgALT}
        width={imgWidth ? imgWidth : undefined}
        height={imgHeight ? imgHeight : undefined}
        className={imgClassName ? imgClassName : undefined}
      />
    </div>
  );
};
