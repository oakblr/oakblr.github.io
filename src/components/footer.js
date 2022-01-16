import * as React from "react"
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material"
import { Facebook, Instagram, GitHub } from "@mui/icons-material"
import siteData from "../site-data"

function Footer() {
  return (
    <footer>
      <Card elevation={5} sx={{ p: 4 }}>
        <Box sx={{ maxWidth: "1000px", width: "80vw", py: 2, mx: "auto" }}>
          <Grid
            container
            spacing={{ xs: 1, sm: 2, md: 4 }}
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography variant="h5">Contact Us:</Typography>
              <Typography variant="body2">
                Email us at{" "}
                <a href={"mailto:" + siteData.footerDetails.codefestEmail}>
                  {siteData.footerDetails.codefestEmail}
                </a>
                .
              </Typography>
              <Box flexGrow={1}></Box>
              <Stack
                direction="row"
                justifyContent="flex-start"
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ my: "2px" }}
              >
                <IconButton
                  href={siteData.footerDetails.facebookLink}
                  target="_blank"
                  aria-label="see facebook page"
                  sx={{ color: "#3b5998" }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  href={siteData.footerDetails.instagramLink}
                  target="_blank"
                  aria-label="see instagram page"
                  sx={{ color: "#E4405F" }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  href={siteData.footerDetails.githubLink}
                  target="_blank"
                  aria-label="see github page"
                >
                  <GitHub />
                </IconButton>
              </Stack>
              <div style={{ margin: "4px" }}>
                <Button href="/terms">Terms {"&"} Conditions</Button>
              </div>
              © {new Date().getFullYear()}{" "}
              {siteData.footerDetails.copyrightHolder}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5">Codefest Core Team:</Typography>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ my: "6px" }}
              >
                {siteData.coreTeamMembers.map(member => (
                  <Grid item xs={6}>
                    <Typography variant="body1" key={member["name"]}>
                      {member["name"]}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
              <Button variant="outlined" href="/core-team">
                More Info
              </Button>
              <br />
              <br />
              <Typography variant="body2">
                Website developed by:{" "}
                <a
                  href="https://github.com/aklingam7"
                  target="_blank"
                  rel="noreferrer"
                >
                  aklingam7
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </footer>
  )
}

export default Footer
