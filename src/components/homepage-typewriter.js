import * as React from "react"
import TypeWriter from "./typewriter"
import "./homepage-typewriter.css"
import siteData from "../site-data"
import { Box, Card } from "@mui/material"

function HomePageTypewriter() {
  return (
    <div align="center">
      <Box sx={{ backgroundColor: "#FFFFFF00", position: "relative" }}>
        <Box
          elevation={6}
          sx={{
            maxWidth: "500px",
            width: "60%",
            borderRadius: "6px",
            backgroundColor: "#FFFFFF00",
            backgroundImage: { undefined },
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "5",
          }}
        >
          <div
            style={{
              fontFamily: "Courier New",
              fontSize: "19px",
              fontWeight: 700,
            }}
          >
            <TypeWriter typing={1} maxDelay={40} minDelay={10}>
              {siteData.typewriterContent}
            </TypeWriter>
          </div>
        </Box>
        <Card
          elevation={15}
          sx={{
            maxWidth: "500px",
            width: "60%",
            borderRadius: "6px",
            opacity: 0.95,
          }}
        >
          <div
            style={{
              fontFamily: "Courier New",
              fontSize: "19px",
              fontWeight: 700,
            }}
          >
            <div style={{ opacity: 0.0 }}>
              <TypeWriter typing={1} maxDelay={40} minDelay={10}>
                {siteData.typewriterContent}
              </TypeWriter>
            </div>
          </div>
        </Card>
      </Box>
    </div>
  )
}

export default HomePageTypewriter
