import * as React from "react"
import { Card, Divider, Typography } from "@mui/material"
import siteData from "../site-data"

function PrizesSection() {
  return (
    <div align="center">
      <Card elevation={5} sx={{ maxWidth: "1000px", width: "80vw", p: 4 }}>
        <Typography variant="h4">{siteData.prizesSection.cash}</Typography>
        <Divider sx={{ my: "10px" }} />
        <Typography variant="h4">{siteData.prizesSection.sponsor}</Typography>
      </Card>
    </div>
  )
}

export default PrizesSection
