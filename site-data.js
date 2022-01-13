import React from "react"
import { Tungsten, Style, EmojiEvents } from "@mui/icons-material"
import {
  Biotech,
  Book,
  LocalFlorist,
  LocalHospital,
  VideogameAsset,
} from "@mui/icons-material"

// prettier-ignore
const typewriterContent = (
<pre style={{whiteSpace: "pre-line"}}>
<span className="var-highlight">Oakridge Codefest</span> 2022 = {"{"} {"\n"}
type: <span className="string-highlight">'24 hour Virtual Hackathon'</span>, {"\n"}
date: <span className="string-highlight">'22nd-23rd Jan 2022'</span>, {"\n"}
location: <span className="string-highlight">'Online(or not perhaps?)'</span>, {"\n"}
themes:[ {"\n"}
<span className="string-highlight">'STEM Simulation'</span>, {"\n"}
<span className="string-highlight">'Education'</span>, {"\n"}
<span className="string-highlight">'Environmental Sustainability'</span>, {"\n"}
<span className="string-highlight">'Healthcare'</span>,  {"\n"}
<span className="string-highlight">'Game Development (Juniors Only)'</span>, {"\n"}
] {"\n"}
{"}"};
</pre>
)

const siteData = {
  homepageSections: ["Themes", "Prizes", "Sponsors", "FAQ"],
  registerButton: {
    text: "Register Now",
    url: "https://forms.gle/7qxxhaCbP16mW7ez5",
  },
  typewriterContent: typewriterContent,
  codefestEndDate: "January 22 2022 11:00:00 GMT+0530",
  introCardSections: [
    {
      icon: <Tungsten sx={{ fontSize: "54px" }} />,
      title: "What is Codefest?",
      content:
        "Oakridge Codefest is one of Bangalore's largest high-school hackathons that provides the opportunity for aspiring developers to showcase their unique talents to both each other and veterans of the industry.",
    },
    {
      icon: <Style sx={{ fontSize: "54px" }} />,
      title: "Themes",
      content:
        "With a multitude of impactful themes, the participants will be tackling current technical problems with innovative improvements and solutions.",
    },
    {
      icon: <EmojiEvents sx={{ fontSize: "54px" }} />,
      title: "Rewards",
      content:
        "Placement in the top three will guarantee a large monetary reward, and additionally, sponsor themes have their own rewards, which include a large assortment of products and services of equal value.",
    },
  ],
  themeSection: {
    title: "Themes for Oakridge Codefest (2022)",
    description: (
      <>
        Teams are expected to use at least one primary theme for their project
        but are advised to choose two or more themes. For more infomation
        regarding the themes please email us at{" "}
        <a href="mailto:oakcodefest@oakridge.in">oakcodefest@oakridge.in</a>
      </>
    ),
    themes: [
      [
        {
          name: "STEM Simulation",
          icon: <Biotech />,
          description: (
            <p>
              This exciting new theme will give participants the opportunity to
              design a simulation based on STEM principles. The project can take
              multiple directions, including but not limited to data science,
              physics, economics, and more
            </p>
          ),
          example: (
            <p>
              Examples: Fluid simulation, circuit builder, model solar system
            </p>
          ),
        },
        {
          name: "Education",
          icon: <Book />,
          description: (
            <p>
              Education develops effective leaders and innovators of tomorrow.
              Technology has played a significant role in recent years in
              allowing education to have a larger reach and allowing the
              teaching and learning processes to occur more smoothly. Especially
              during the current pandemic, the internet and video call services
              have allowed for learning to continue even while we are restricted
              at home. How can you use your technological skills to improve
              education?
            </p>
          ),
          example: <p>Examples: Worksheet Generator and Note Taking App</p>,
        },
        {
          name: "Environmental sustainability",
          icon: <LocalFlorist />,
          description: (
            <p>
              Sustainability refers to creating a world that can be prosperous
              and habitable for future generations, and as society progresses,
              technology will be the at the crux of maintaining sustainability.
              From new and more efficient uses of energy to combating
              deforestation, technology's importance to sustainability has been
              especially pronounced in recent years. What can you do with
              technology to create a more sustainable world?
            </p>
          ),
          example: <p>Examples: Carbon Footprint Calculator and Smart Bulb</p>,
        },
      ],
      [
        {
          name: "Healthcare",
          icon: <LocalHospital />,
          description: (
            <p>
              Health care is an essential service, and our ability to provide
              quality health care as well as store, share and analyze health
              information is directly tied to improved technology. Particularly
              with the current situation of the COVID-19 pandemic, technology
              has been used to create solutions to track and minimize the spread
              of the virus. We look forward to seeing what technological
              creations you will develop to contribute to this field.
            </p>
          ),
          example: <p>Examples: Fitness Tracker and Smart Health Monitor</p>,
        },
        {
          name: "Game Development (6-8th Grade)",
          icon: <VideogameAsset />,
          description: (
            <p>
              Video games are a great way to have fun and learn code at the same
              time! <br />
              <br /> For this theme, we expect participants to be creative and
              innovative and have some kind of unique idea or message in it.
              Participants need to use programming languages and drag and
              drop/WYSIWYG applications such as Scratch and MIT App Inventor are
              strictly not allowed.
            </p>
          ),
          example: null,
        },
      ],
    ],
  },
}

export default siteData
