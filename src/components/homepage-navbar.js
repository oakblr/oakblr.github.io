import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  AppBar,
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import siteData from "../site-data"
import RegisterDropdownNav from "./register-dropdown-nav"

function HomePageNavBar() {
  const pages = siteData.homepageSections
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const goToAnchorLink = link => {
    const p = document.getElementById(link).offsetTop
    window.scrollTo({ top: p, behavior: "smooth" })
  }

  const goToInternalRegistrationForm = () => {
    window.location = siteData.registerButton.internalUrl;
  }

  const goToExternalRegistrationForm = () => {
    window.location = siteData.registerButton.externalUrl;
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Card
            elevation={3}
            sx={{ p: 0.25, m: 1, display: { xs: "none", sm: "flex" } }}
          >
            <a href="https://www.oakridge.in/bengaluru" target="_blank" rel="noreferrer">
              <StaticImage
                src="../images/oakridge-logo.png"
                alt="Oakridge Logo"
                placeholder="blurred"
                height={45}
              />
            </a>
          </Card>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="page navigation drawer"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              {pages.map(page => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu()
                    goToAnchorLink(page)
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem
                key="RegisterInt"
                onClick={() => {
                  handleCloseNavMenu()
                  goToInternalRegistrationForm()
                }}
              >
                <Typography textAlign="center">Register (Oakridgers) </Typography>
              </MenuItem>

              <MenuItem
                key="RegisterExt"
                onClick={() => {
                  handleCloseNavMenu()
                  goToExternalRegistrationForm()
                }}
              >
                <Typography textAlign="center">Register (Non-Oakridgers) </Typography>
              </MenuItem>

            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "flex", sm: "none" },
            }}
          >
            <Card
              elevation={3}
              sx={{
                p: 0.25,
                my: 1,
              }}
            >
              <a
                href="https://www.oakridge.in/"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  src="../images/oakridge-logo.png"
                  alt="Oakridge Logo"
                  placeholder="blurred"
                  height={45}
                />
              </a>
            </Card>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }} />
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {pages.map(page => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu()
                  goToAnchorLink(page)
                }}
                sx={{ mx: 0.25, my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <RegisterDropdownNav />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton size="large" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default HomePageNavBar
