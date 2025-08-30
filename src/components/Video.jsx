"use client";

import { useEffect, useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays correctly and loops
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });

      // Handle when video ends to restart it
      const handleEnded = () => {
        videoElement.currentTime = 0;
        videoElement.play().catch((error) => {
          console.log("Video replay error:", error);
        });
      };

      videoElement.addEventListener("ended", handleEnded);

      return () => {
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  return (
    <div className="w-full  flex justify-center items-center p-4 md:p-8">
      <div className="w-full max-w-8xl">
        {/* Video for medium and large screens */}
        <div className="">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto "
          >
            <source src="/safepianolg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
