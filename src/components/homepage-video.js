import * as React from "react"

import webmVideo from "../assets/cf-banner.webm"
import mp4Video from "../assets/cf-banner.mp4"

function HomePageVideo({ videoHeight, height }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: `${height * 100}vh`,
        zIndex: -1,
        //background: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          height: `${videoHeight * 100}vh`,
          width: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={webmVideo} type="video/webm" />
        <source src={mp4Video} type="video/mp4" />
      </video>
    </div>
  )
}

export default HomePageVideo
