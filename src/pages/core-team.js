import * as React from "react"
import Layout from "../components/layout"
import { Box, Button, Card, Grid, Typography } from "@mui/material"
import siteData from "../site-data"

const CoreTeamPage = () => {
  return (
    <Layout title="Core Team">
      <main>
        <div align="center">
          <Box sx={{ maxWidth: "1000px", width: "80vw" }}>
            <Card elevation={5} sx={{ m: 4, p: 3 }}>
              <Typography variant="h2">{siteData.coreTeamPageTitle}</Typography>
              <br />
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {siteData.coreTeamMembers.map(member => (
                  <Grid item xs={4}>
                    <Card elevation={5} sx={{ borderRadius: "10px" }}>
                      {member.image}
                      <br />
                      <Typography variant="subtitle1" sx={{ p: "5px" }}>
                        {member.name}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <br />
              <Button variant="contained" href="/">
                Go back home
              </Button>
            </Card>
          </Box>
        </div>
      </main>
    </Layout>
  )
}

export default CoreTeamPage
