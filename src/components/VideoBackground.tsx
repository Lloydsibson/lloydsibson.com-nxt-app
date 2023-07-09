import { useEffect, useState, useRef } from "react";

const VideoBackground = () => {
  const [backgroundVideoURL, setBackgroundVideoURL] = useState<string>("");
  const ref = useRef<any>(null);

  useEffect(() => {
    // LOADS IN VIDEO AFTER PAGE HAS LOADED - IMPROVING PAGE PERFORMANCE
    setTimeout(function () {
      setBackgroundVideoURL(
        "https://res.cloudinary.com/cloudinary-ls-images/video/upload/q_auto:eco/v1610808503/img/Sunset-hb-vimeo-2k-web.mp4"
      );
      const videoElem = ref.current;
      videoElem.load();
      const playPromise = videoElem.play();
      if (playPromise !== null) {
        playPromise.catch(() => {
          videoElem.play();
        });
      }
    }, 250);
  }, []);
  return (
    <section className="html-video-container">
      <video
        //autoPlay
        ref={ref}
        loop
        muted
        playsInline
        // ref="video"
        className="videoplayer"
        id="video"
        controlsList="nodownload"
        poster="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1610816567/img/video-placeholder.png"
      >
        <source type="video/mp4" src={backgroundVideoURL} />
      </video>
      {/* <img
        className="html-video-container__img"
        src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1610816567/img/video-placeholder.png"
        alt="Man with his back turned"
      /> */}

      {/* <div className="mask"></div> */}
    </section>
  );
};

export default VideoBackground;
