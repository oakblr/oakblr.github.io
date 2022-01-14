import * as React from "react"
import Layout from "../components/layout"
import { Button, Typography } from "@mui/material"

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <main>
        <Typography variant="h2" align="center">
          Page not found
        </Typography>
        <Typography variant="body1" align="center">
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔{" "}
          </span>
          ! we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Button variant="contained" href="/">
            Go Back
          </Button>
        </Typography>
      </main>
    </Layout>
  )
}

export default NotFoundPage
