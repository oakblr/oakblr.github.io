import * as React from "react"
import Layout from "../components/layout"
import { Button, Typography } from "@mui/material"
import siteData from "../site-data"

const JuniorPage = () => {
  return (
    <Layout title="Oakridge Junior Codefest">
      <main>
        <Typography variant="h2" align="center">
          {siteData.juniorSiteData.title}
        </Typography>
        <Typography variant="body1" align="center">
          {siteData.juniorSiteData.description}
          <br />
          <br />
          <Button variant="contained" href="/">
            Go To Homepage
          </Button>
        </Typography>
      </main>
    </Layout>
  )
}

export default JuniorPage
