import * as React from "react"
import { Box, Card, Divider, Stack, Typography } from "@mui/material"
import siteData from "../site-data"

function SponsorsSection() {
  return (
    <div align="center">
      {/* <Box sx={{ maxWidth: "1000px", width: "80vw" }}>
        <Card elevation={5} sx={{ p: 3 }}>
          {siteData.sponsorsSection.sponsorGroups.map((sponsorGroup, index) => (
            <>
              {sponsorGroup.title}
              {sponsorGroup.sponsorRows.map(sponsorRow => (
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  {sponsorRow.map(sponsor => (
                    <>{sponsor}</>
                  ))}
                </Stack>
              ))}
              {index !== siteData.sponsorsSection.sponsorGroups.length - 1 ? (
                <Divider sx={{ my: 3, mx: "15%" }} />
              ) : undefined}
            </>
          ))}
        </Card>
      </Box> */}
    </div>
  )
}

export default SponsorsSection
