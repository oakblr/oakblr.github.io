import * as React from "react"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Typography,
} from "@mui/material"
import "./themes-section.css"
import siteData from "../../site-data"

function ThemesSection() {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div align="center">
      <Box sx={{ maxWidth: "1000px", width: "80vw" }}>
        <Card elevation={5} sx={{ p: 3, marginBottom: 2 }}>
          <Typography variant="h3">{siteData.themesSection.title}</Typography>
          <br />
          <Typography variant="body1">
            {siteData.themesSection.description}
          </Typography>
        </Card>
        <Box sx={{ display: { xs: "block", lg: "none" }, textAlign: "left" }}>
          {siteData.themesSection.themes
            .reduce((themeList, themeGroup) => themeList.concat(themeGroup))
            .map(theme => (
              <Accordion
                expanded={expanded === theme.name}
                onChange={handleChange(theme.name)}
                elevation={5}
              >
                <AccordionSummary id={theme.name + "-header"}>
                  <Typography variant="h6">
                    <span>{theme.icon}</span>&nbsp;&nbsp;{theme.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">{theme.description}</Typography>
                  <Typography variant="body1">{theme.example}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
        </Box>
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          {siteData.themesSection.themes.map(themeGroup => (
            <Box
              className="card-list"
              sx={{
                display: "flex",
                justifyContent: "center",
                my: "30px",
              }}
            >
              {themeGroup.map(theme => (
                <Card
                  className="card"
                  elevation={5}
                  component="article"
                  sx={{
                    height: "410px",
                    width: "485px",
                    minWidth: "330px",
                    padding: "1.5rem",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.2s",
                    clear: "both",
                    textAlign: "left",
                    boxShadow: "-1rem 0 3rem #000",
                  }}
                >
                  <Typography variant="h5">
                    <span>{theme.icon}</span>&nbsp;&nbsp;{theme.name}
                  </Typography>
                  <Typography variant="body1">{theme.description}</Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Typography variant="body1">{theme.example}</Typography>
                </Card>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  )
}

export default ThemesSection
