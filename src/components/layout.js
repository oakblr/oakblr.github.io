import * as React from "react"
import PropTypes from "prop-types"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import PageHelmet from "./page-helmet"
import Footer from "./footer"

function Layout({ children, description, lang, meta, title }) {
  return (
    <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
      <PageHelmet
        description={description}
        lang={lang}
        meta={meta}
        title={title}
      />
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <div style={{ flex: "1 0 auto" }}>{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default Layout
