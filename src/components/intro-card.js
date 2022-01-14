import * as React from "react"
import { Box, Card, Divider, Stack, Typography } from "@mui/material"
import siteData from "../site-data"

function IntroCard() {
  return (
    <div align="center">
      <Card elevation={5} sx={{ maxWidth: "1000px", width: "80vw", p: 3 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="space-evenly"
          alignItems={{ xs: "center", sm: "flex-start" }}
        >
          {siteData.introCardSections.map(section => (
            <Box
              sx={{
                width: {
                  xs: "60vw",
                  sm: `${64 / siteData.introCardSections.length}vw`,
                },
              }}
            >
              {section.icon}
              <Typography variant="h4" sx={{ py: 1 }}>
                {section.title}
              </Typography>
              <Typography variant="body1">{section.content}</Typography>
            </Box>
          ))}
        </Stack>
      </Card>
    </div>
  )
}

export default IntroCard
