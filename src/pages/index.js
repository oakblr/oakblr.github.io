import * as React from "react"
import Layout from "../components/layout"
import HomePageNavBar from "../components/homepage-navbar"
import HomePageTypewriter from "../components/homepage-typewriter"
import HomePageVideo from "../components/homepage-video"
import Countdown from "../components/countdown"
import IntroCard from "../components/intro-card"
import ThemesSection from "../components/themes-section"
import PrizesSection from "../components/prizes-section"
import FaqSection from "../components/faq-section"
import SponsorsSection from "../components/sponsors-section"
import PhotoArchiveSection from "../components/photo-archive-section"
import EventPhotosSection from "../components/event-photos-section"
import { Divider } from "@mui/material"

// TODO: Replace 'align' attribute of all divs
// TODO: Add key to all top-level elements in maps
const IndexPage = () => {
  return (
    <Layout>
      <HomePageNavBar />
      <main align="center">
        <HomePageVideo videoHeight={0.85} height={0.4} />
        <HomePageTypewriter />
        <div style={{ margin: "25px" }}></div>
        <Countdown />
        <div style={{ margin: "20px" }}></div>
        <IntroCard />
        <div id="Themes" style={{ margin: "32px" }}></div>
        {/* <ThemesSection /> */}
        <div id="Prizes" style={{ margin: "20px" }}></div>
        <PrizesSection />
        <div id="FAQ" style={{ margin: "20px" }}></div>
        <FaqSection />
        <div id="Sponsors" style={{ margin: "20px" }}></div>
        <SponsorsSection />
        <div id="PhotoArchive" style={{ margin: "20px" }}></div>
        <PhotoArchiveSection />
        <div id="EventPhotos" style={{ margin: "20px" }}>
          <Divider
            style={{
              maxWidth: "960px",
              width: "calc(80vw - 40px)",
              margin: "0px auto",
            }}
          />
        </div>
        <EventPhotosSection />
        <div style={{ margin: "20px" }}></div>
      </main>
    </Layout>
  )
}

export default IndexPage
