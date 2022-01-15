import * as React from "react"
import { Box, Button, Card, Stack, Typography } from "@mui/material"
import "./photo-archive-section.css"
import siteData from "../site-data"

function PhotoArchiveSection() {
  return (
    <div align="center">
      <Box sx={{ maxWidth: "1000px", width: "80vw" }}>
        <Card elevation={5} sx={{ p: 3 }}>
          <Typography variant="h3">
            {siteData.photoArchiveSection.title}
          </Typography>
          <br />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-evenly"
            alignItems="center"
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {siteData.photoArchiveSection.years.map(year => (
              <Button
                variant="text"
                className="year-button"
                sx={{
                  width: 1 / siteData.photoArchiveSection.years.length,
                  aspectRatio: "4/1",
                  position: "relative",
                  borderRadius: "18px",
                  overflow: "hidden",
                  padding: 0,
                }}
              >
                <a href={year.link} target="_blank" rel="noreferrer">
                  <Typography
                    variant="h4"
                    color="primary"
                    className="year-link"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontWeight: 600,
                      zIndex: 1,
                    }}
                  >
                    {year.year}
                  </Typography>
                  <Box className="year-banner">{year.image}</Box>
                </a>
              </Button>
            ))}
          </Stack>
        </Card>
      </Box>
    </div>
  )
}

export default PhotoArchiveSection
