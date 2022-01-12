import * as React from "react"
import Layout from "../components/layout"
import HomePageNavBar from "../components/homepage-navbar"
import HomePageTypewriter from "../components/homepage-typewriter"
import HomePageVideo from "../components/homepage-video"
import { Button, Typography } from "@mui/material"

const IndexPage = () => {
  return (
    <Layout>
      <HomePageNavBar />
      <main align="center">
        <HomePageVideo videoHeight={0.5} height={0.4} />
        <HomePageTypewriter />
        <Typography variant="h2">Hello World</Typography>
        <Button>Test</Button>
      </main>
    </Layout>
  )
}

export default IndexPage
