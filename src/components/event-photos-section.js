import * as React from "react"
import { Box, Typography } from "@mui/material"
import { Parallax, Background } from "react-parallax"
import siteData from "../site-data"

function EventPhotosSection() {
  return (
    <div align="center">
      {siteData.eventPhotosSection.sections.map(section => (
        <Box sx={{ my: 2 }} key={section.title}>
          <Typography variant="h3" sx={{ marginBottom: 2 }}>
            {section.title}
          </Typography>
          <Parallax strength={250} bgStyle={{ width: "100vw" }}>
            <Background className="custom-bg">{section.image}</Background>
            <div style={{ height: "40vh", overflow: "clip" }}></div>
          </Parallax>
        </Box>
      ))}
    </div>
  )
}

export default EventPhotosSection
