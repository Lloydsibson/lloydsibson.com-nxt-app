import React, { useState, useRef, useEffect } from "react";

const VideoBackground = () => {
  const [backgroundVideoURL, setBackgroundVideoURL] = useState<string>("");
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // LOADS IN VIDEO AFTER PAGE HAS LOADED - IMPROVING PAGE PERFORMANCE
    setTimeout(function () {
      setBackgroundVideoURL(
        "https://res.cloudinary.com/cloudinary-ls-images/video/upload/q_auto:eco/v1610808503/img/Sunset-hb-vimeo-2k-web.mp4"
      );
      const videoElem = ref.current;
      if (videoElem) {
        videoElem.load();
        const playPromise = videoElem.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            videoElem.play();
          });
        }
      }
    }, 250);
  }, []);

  return (
    <section className="html-video-container">
      <video
        autoPlay
        ref={ref}
        loop
        muted={true}
        playsInline
        className="videoplayer"
        id="video"
        controlsList="nodownload"
        poster="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto,e_blur:100/v1610816567/img/video-placeholder"
      >
        {backgroundVideoURL && (
          <source type="video/mp4" src={backgroundVideoURL} />
        )}
      </video>
    </section>
  );
};

export default VideoBackground;
