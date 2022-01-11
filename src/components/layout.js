import * as React from "react"
import PropTypes from "prop-types"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import PageHelmet from "../components/page-helmet"

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
      {children}
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
