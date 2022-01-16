import * as React from "react"
import Layout from "../components/layout"
import {
  Avatar,
  Box,
  Button,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material"
import { Info } from "@mui/icons-material"
import siteData from "../site-data"

const TermsPage = () => {
  return (
    <Layout title="Terms & Conditions">
      <main>
        <div align="center">
          <Box sx={{ maxWidth: "1000px", width: "80vw" }}>
            <Card elevation={5} sx={{ m: 4, p: 3 }}>
              <Typography variant="h2">{siteData.termsPage.title}</Typography>
              <br />
              <List sx={{ width: "100%" }}>
                {siteData.termsPage.terms.map(term => (
                  <ListItem key={term}>
                    <ListItemAvatar>
                      <Avatar>
                        <Info />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={term}></ListItemText>
                  </ListItem>
                ))}
              </List>
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

export default TermsPage
