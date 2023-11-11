import * as React from "react"

import webmVideo from "../assets/cf-banner.webm"
import mp4Video from "../assets/cf-banner.mp4"

function HomePageVideo({ videoHeight, height }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
      setTimeout(function() {
        ref.current.style.opacity = "100%";
      }, 1750);
  })
  
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: `${height * 100 + 30}vh`,
        zIndex: -1,
        // background: `linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: `${videoHeight * 100}vh`,
          zIndex: -1,
          backgroundColor: "black",
        }}
      >
        <video
        autoPlay
        muted
        playsInline
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          height: `${videoHeight * 100 - 20}vh`,
          width: "auto",
          objectFit: "scale-down",
          zIndex: -1,
        }}
      >
        <source src={webmVideo} type="video/webm" />
        <source src={mp4Video} type="video/mp4" />
      </video>

      <video
        autoPlay
        muted
        playsInline
        ref={ref}
        style={{
          opacity: "0%",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          height: `${videoHeight * 100 - 20}vh`,
          width: "auto",
          objectFit: "scale-down",
          filter: "blur(16px)",
          zIndex: -2,
        }}
      >
        <source src={webmVideo} type="video/webm" />
        <source src={mp4Video} type="video/mp4" />
      </video>
      </div>
      
    </div>
  )
}

export default HomePageVideo
