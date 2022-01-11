import * as React from "react"
import Layout from "../components/layout"
import { Button, Typography } from "@mui/material"

const IndexPage = () => {
  return (
    <Layout>
      <main align="center">
        <Typography variant="h2">Hello World</Typography>
        <Button>Test</Button>
      </main>
    </Layout>
  )
}

export default IndexPage
