import React from "react"
import { Tungsten, Style, EmojiEvents } from "@mui/icons-material"

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
}

export default siteData
