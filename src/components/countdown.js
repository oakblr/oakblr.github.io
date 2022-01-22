import React, { useState } from "react"
import { Card, Stack, Typography } from "@mui/material"
import siteData from "../site-data"

import glitchImg from "../images/glitch.jpg"

function Countdown() {
  const timeLeft = () => {
    const t = Date.parse(siteData.codefestEndDate) - Date.parse(new Date())
    return [
      Math.max(Math.floor(t / (1000 * 60 * 60 * 24)), 0),
      Math.max(Math.floor((t / (1000 * 60 * 60)) % 24), 0),
      Math.max(Math.floor((t / 1000 / 60) % 60), 0),
      Math.max(Math.floor((t / 1000) % 60), 0),
    ]
  }

  const [countdown, setCountdown] = useState(timeLeft())

  setInterval(() => setCountdown(timeLeft()), 1000)

  return (
    <div align="center">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: "500px", width: "60%" }}
      >
        <div align="center">
          <Card
            sx={{
              p: 1,
              backgroundImage: `url(${glitchImg})`,
              backgroundPosition: "100px 100px",
            }}
          >
            <Typography variant="h3">{countdown[0]}</Typography>
          </Card>
          <p>Days</p>
        </div>
        <div align="center">
          <Card
            sx={{
              p: 1,
              backgroundImage: `url(${glitchImg})`,
              backgroundPosition: "200px 100px",
            }}
          >
            <Typography variant="h3">{countdown[1]}</Typography>
          </Card>
          <p>Hours</p>
        </div>
        <div align="center">
          <Card
            sx={{
              p: 1,
              backgroundImage: `url(${glitchImg})`,
              backgroundPosition: "300px 100px",
            }}
          >
            <Typography variant="h3">{countdown[2]}</Typography>
          </Card>
          <p>Minutes</p>
        </div>
        <div align="center">
          <Card
            sx={{
              p: 1,
              backgroundImage: `url(${glitchImg})`,
              backgroundPosition: "400px 100px",
            }}
          >
            <Typography variant="h3">{countdown[3]}</Typography>
          </Card>
          <p>Seconds</p>
        </div>
      </Stack>
    </div>
  )
}

export default Countdown
