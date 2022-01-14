import * as React from "react"
import PropTypes from "prop-types"
import {
  Box,
  Card,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@mui/material"
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineOppositeContent,
} from "@mui/lab"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import siteData from "../site-data"

function FaqSection() {
  const [tab, setTab] = React.useState(0)
  const [open, setOpen] = React.useState(-1)

  const handleTabChange = (event, newValue) => {
    handleFaqClick(-1)
    setTab(newValue)
  }

  const handleFaqClick = faqNum => {
    if (faqNum !== open) {
      setOpen(faqNum)
    } else {
      setOpen(-1)
    }
  }

  return (
    <div align="center">
      <Box sx={{ maxWidth: "1000px", width: "80vw" }}>
        <Card elevation={5} sx={{ p: 3 }}>
          <Typography variant="h3">{siteData.faqSection.title}</Typography>
          <br />
          <Typography variant="body1">
            {siteData.faqSection.description}
          </Typography>
          <br />
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tab}
              onChange={handleTabChange}
              centered={true}
              aria-label="frequently asked questions"
            >
              {siteData.faqSection.faqGroups.map(group => (
                <Tab label={group.groupTitle} />
              ))}
              <Tab label={siteData.faqSection.timelineSection.title} />
            </Tabs>
          </Box>
          {siteData.faqSection.faqGroups.map((group, index) => (
            <TabPanel value={tab} index={index}>
              <List
                sx={{
                  width: "100%",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                {group.faqs.map((faq, index) => (
                  <>
                    <ListItemButton onClick={() => handleFaqClick(index)}>
                      <ListItemIcon>{faq.icon}</ListItemIcon>
                      <ListItemText primary={faq.title} />
                      {open === index ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open === index} timeout="auto" unmountOnExit>
                      <List component="div" sx={{ px: 3 }}>
                        <Typography variant="body1" sx={{ textAlign: "left" }}>
                          {faq.content}
                        </Typography>
                      </List>
                    </Collapse>
                  </>
                ))}
              </List>
            </TabPanel>
          ))}
          <TabPanel value={tab} index={siteData.faqSection.faqGroups.length}>
            <Timeline position="alternate">
              {siteData.faqSection.timelineSection.timeline.map(
                (timelineItem, index) => (
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      align={index % 2 === 0 ? "right" : undefined}
                      variant="body2"
                      color="text.secondary"
                    >
                      {timelineItem.date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                      <TimelineDot color="secondary">
                        {timelineItem.icon}
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography variant="h6" component="span">
                        {timelineItem.title}
                      </Typography>
                      <Typography>{timelineItem.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                )
              )}
            </Timeline>
          </TabPanel>
        </Card>
      </Box>
    </div>
  )
}

export default FaqSection

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}
