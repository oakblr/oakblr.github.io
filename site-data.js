import React from "react"

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
}

export default siteData
