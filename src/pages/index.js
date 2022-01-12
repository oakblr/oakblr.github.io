import * as React from "react"
import Layout from "../components/layout"
import HomePageNavBar from "../components/homepage-navbar"
import HomePageTypewriter from "../components/homepage-typewriter"
import { Button, Typography } from "@mui/material"

const IndexPage = () => {
  return (
    <Layout>
      <HomePageNavBar />
      <main align="center">
        <Typography variant="h2">Hello World</Typography>
        <Button>Test</Button>
        <HomePageTypewriter />
      </main>
    </Layout>
  )
}

export default IndexPage
