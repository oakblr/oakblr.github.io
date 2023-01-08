import * as React from "react"
import { Card } from "@mui/material"
import { Tungsten, Style, EmojiEvents } from "@mui/icons-material"
import {
  DirectionsBus,
  Book,
  LocalFlorist,
  LocalHospital,
  VideogameAsset,
} from "@mui/icons-material"
import {
  People,
  Laptop,
  MonetizationOn,
  Grading,
  Language,
  LightbulbOutlined,
  Copyright,
  Cached,
} from "@mui/icons-material"
import { ContactMail, PendingActions, Event } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"

// prettier-ignore
const typewriterContent = (
<pre style={{whiteSpace: "pre-line"}}>
<span className="var-highlight">Oakridge Codefest</span> 2023 = {"{"} {"\n"}
type: <span className="string-highlight">'24 hour Overnight Hackathon'</span>, {"\n"}
date: <span className="string-highlight">'21st and 22nd of January, 2023'</span>, {"\n"}
location: <span className="string-highlight">'Oakridge International School Bengaluru'</span>, {"\n"}
themes:[ {"\n"}
<span className="string-highlight">'Transport & Infrastructure'</span>, {"\n"}
<span className="string-highlight">'Education'</span>, {"\n"}
<span className="string-highlight">'Environmental Sustainability'</span>, {"\n"}
<span className="string-highlight">'Healthcare'</span>,  {"\n"}
<span className="string-highlight">'Game Development (Juniors Only)'</span>, {"\n"}
] {"\n"}
{"}"};
</pre>
)

const juniorSiteData = {
  title: "Coming Soon",
  description: "Oakridge Codefest is coming soon to children from grades 3-5.",
}

const siteData = {
  juniorSiteData: juniorSiteData,
  homepageSections: ["Themes", "Prizes", "FAQ", "Sponsors"],
  registerButton: {
    text: "Register Now",
    url: "https://forms.gle/CJ3CEwH33nBvUvgeA",
    disabled: false,
  },
  typewriterContent: typewriterContent,
  codefestEndDate: "January 21 2023 11:00:00 GMT+0530",
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
  themesSection: {
    title: "Themes for Oakridge Codefest (2023)",
    description: (
      <>
        Teams are expected to select one primary theme for their project but are
        allowed and encouraged to choose more secondary themes. For more
        information regarding the themes please email us at{" "}
        <a href="mailto:codefest@oakridge.in">codefest@oakridge.in</a>
      </>
    ),
    themes: [
      [
        {
          name: "Transportation",
          icon: <DirectionsBus />,
          description: (
            <p>
              Humans, around the world, commute millions of miles every single
              day. A significant fraction of our day is spent in traveling.
              Technology has played a very significant role in enabling more
              people to commute. Technology has fundamentally redefined the way
              we travel. Imagine how technology can improve human experience
              even further in day to day transportation and commute. What can
              technology do make public and private transportation much simpler
              and safer?
            </p>
          ),
          example: (
            <p>
              Examples: Ride Sharing Application, Road Safety Reporting System
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
          name: "Environmental Sustainability",
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
  prizesSection: {
    cash: "Large cash prizes",
    sponsor: "Exclusive participation perks from our sponsors",
  },
  faqSection: {
    title: "Frequently Asked Questions (FAQ)",
    description: (
      <>
        Email us at{" "}
        <a href="mailto:codefest@oakridge.in">codefest@oakridge.in</a> for
        further queries.
      </>
    ),
    faqGroups: [
      {
        groupTitle: "Participation Details",
        faqs: [
          {
            title: "Who can participate in this event?",
            icon: <People />,
            content: (
              <p>
                Anyone between grades 6 and 12 with a passion for technology.
              </p>
            ),
          },
          {
            title: "Where will the hackathon take place?",
            icon: <Laptop />,
            content: (
              <p>
                The Codefest is an in-person event and will be held at Oakridge
                International School, Bangalore.
              </p>
            ),
          },
          {
            title: "What does my registration fee go towards?",
            icon: <MonetizationOn />,
            content: (
              <p>
                The ₹400 will cover your snacks, accommodation, eligibility for
                the rewards provided by our sponsors.
              </p>
            ),
          },
          {
            title: "Is there a selection process for the Oakridge Codefest?",
            icon: <Grading />,
            content: (
              <p>
                We at Codefest believe that everyone with a passion for coding
                should be given the opportunity to participate in the event. To
                facilitate this, our team will guide all teams towards creating
                a solid idea for their projects. Participants will receive a
                final confirmation once their idea has been vetted by the
                Codefest team at least 2 weeks before the event.
              </p>
            ),
          },
        ],
      },
      {
        groupTitle: "Idea Details",
        faqs: [
          {
            title: "What languages/software can I use?",
            icon: <Language />,
            content: (
              <p>
                Any language, technology stack, or library can be used to create
                your solutions, except drag and drop software like Scratch or
                MIT App Inventor.
              </p>
            ),
          },
          {
            title: "Do we need to have the idea/solution fully working?",
            icon: <LightbulbOutlined />,
            content: (
              <p>
                The entire idea need not be implemented, however, the submission
                should be functional so that it can be reviewed by the judges.
              </p>
            ),
          },
          {
            title:
              "Who will own the IP (Intellectual Property) rights to the solution?",
            icon: <Copyright />,
            content: (
              <p>
                The developer/developers of the web/mobile application will have
                all rights and own the IP of the product. However, all code
                needs to be in the public domain (open source) so that it can be
                evaluated by the judges.
              </p>
            ),
          },
          {
            title: "Can I submit previously developed projects?",
            icon: <Cached />,
            content: (
              <p>
                No, any submission made to the event must be developed within
                the 24 hour time limit and must fit the selected theme.
              </p>
            ),
          },
        ],
      },
    ],
    timelineSection: {
      title: "Important dates",
      timeline: [
        {
          title: "Registration Opens",
          icon: <ContactMail />,
          date: "26th of December",
          description: (
            <p>
              Participants are expected to sign up for the event and submit a
              detailed idea on what exactly they are going to do at the event.
            </p>
          ),
        },
        {
          title: "Early Bird Registrations close",
          icon: <PendingActions />,
          date: "11th of January",
          description: (
            <p>
              The early bird registration period will end on the 11th. After
              this, the registration prices will increase.
            </p>
          ),
        },

        {
          title: "Registration Closes",
          icon: <PendingActions />,
          date: "20th of January",
          description: (
            <p>
              Participants will not be allowed to register after this date. All
              registered participants will be emailed special event invite
              links.
            </p>
          ),
        },
        {
          title: "Event Starts",
          icon: <Event />,
          date: "21st of January",
          description: (
            <p>Participants are expected to reach the campus by 8:30am.</p>
          ),
        },
        {
          title: "Event Ends",
          icon: <Event />,
          date: "22nd of January",
          description: (
            <p>
              On this day, the event will end. Shortlisted teams will get the
              chance to present their projects to the judges, after which the
              winners will be announced.
            </p>
          ),
        },
      ],
    },
  },
  sponsorsSection: {
    title: "Event Sponsors",
    sponsorGroups: [
      {
        title: (
          <Typography variant="h3" sx={{ marginBottom: "12px" }}>
            Financial Partners
          </Typography>
        ),
        sponsorRows: [
          [
            <Card
              elevation={4}
              sx={{
                width: "25%",
                margin: 2,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <a href="https://oakridge.com/" target="_blank" rel="noreferrer">
                <StaticImage
                  src="./images/sponsors/oakridge.png"
                  alt="Oakridge Logo"
                  placeholder="blurred"
                />
              </a>
            </Card>,
            <Card
              elevation={4}
              sx={{
                width: "25%",
                margin: 2,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <a href="https://dhiway.com/" target="_blank" rel="noreferrer">
                <StaticImage
                  src="./images/sponsors/dhiway.png"
                  alt="Dhiway Logo"
                  placeholder="blurred"
                />
              </a>
            </Card>,
          ],
        ],
      },
      {
        title: <Typography variant="h4">In-kind Partners</Typography>,
        sponsorRows: [
          [
            <Card
              elevation={4}
              sx={{
                width: "20%",
                margin: 2,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <a
                href="https://www.instagram.com/underthecloche/"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  src="./images/sponsors/under-the-cloche.png"
                  alt="Under The Cloche Logo"
                  placeholder="blurred"
                />
              </a>
            </Card>,
            <Card
              elevation={4}
              sx={{
                width: "20%",
                margin: 2,
                borderRadius: "34px",
                overflow: "hidden",
              }}
            >
              <a href="https://modfy.video/" target="_blank" rel="noreferrer">
                <StaticImage
                  src="./images/sponsors/modfy.png"
                  alt="Modfy Logo"
                  placeholder="blurred"
                />
              </a>
            </Card>,
          ],
        ],
      },
    ],
  },
  photoArchiveSection: {
    title: "Photo Archive",
    years: [
      {
        year: "2018",
        link: "https://photos.app.goo.gl/d1dYMX6xvNrVfUwJ3",
        image: (
          <StaticImage
            src="./images/banners/2018.jpg"
            alt="2018 Codefest Banner"
            placeholder="blurred"
          />
        ),
      },
      {
        year: "2019",
        link: "https://photos.app.goo.gl/gGYJ8jutArw5ewnJ7",
        image: (
          <StaticImage
            src="./images/banners/2019.jpg"
            alt="2019 Codefest Banner"
            placeholder="blurred"
          />
        ),
      },
      {
        year: "2020",
        link: "https://photos.app.goo.gl/RsQdaypjbmtdctnt8",
        image: (
          <StaticImage
            src="./images/banners/2020.jpg"
            alt="2020 Codefest Banner"
            placeholder="blurred"
          />
        ),
      },
    ],
  },
  eventPhotosSection: {
    title: undefined,
    sections: [
      {
        title: "Winners of Codefest 2018",
        image: (
          <StaticImage
            src="./images/winners/2018.jpg"
            alt="2018 Codefest Winners"
            placeholder="blurred"
            width={5000}
          />
        ),
      },
      {
        title: "Winners of Codefest 2019",
        image: (
          <StaticImage
            src="./images/winners/2019.jpg"
            alt="2019 Codefest Winners"
            placeholder="blurred"
            width={5000}
          />
        ),
      },
      {
        title: "Winners of Codefest 2020",
        image: (
          <StaticImage
            src="./images/winners/2020.jpg"
            alt="2020 Codefest Winners"
            placeholder="blurred"
            width={5000}
          />
        ),
      },
    ],
  },
  footerDetails: {
    codefestEmail: "codefest@oakridge.in",
    facebookLink: "https://www.facebook.com/oakcf/",
    instagramLink: "https://www.instagram.com/oakcodefest/",
    githubLink: "https://github.com/oakblr",
    copyrightHolder: "Oakridge Codefest",
  },
  coreTeamMembers: [
    {
      name: "Aagney Gorthi",
      image: (
        <StaticImage
          src="./images/portraits/aagney.jpg"
          alt="Portrait of Aagney Gorthi"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Aditya Lingam",
      image: (
        <StaticImage
          src="./images/portraits/aditya.jpg"
          alt="Portrait of Aditya Lingam"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Jahnavi Thejo Prakash",
      image: (
        <StaticImage
          src="./images/portraits/jahnavi.jpg"
          alt="Portrait of Jahnavi Thejo Prakash"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Pranav Menon",
      image: (
        <StaticImage
          src="./images/portraits/pranav.jpg"
          alt="Portrait of Pranav Menon"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Raviish Panicker",
      image: (
        <StaticImage
          src="./images/portraits/raviish.jpg"
          alt="Portrait of Raviish Panicker"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Saanika Gupta",
      image: (
        <StaticImage
          src="./images/portraits/saanika.jpg"
          alt="Portrait of Saanika Gupta"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Siddharth Satish",
      image: (
        <StaticImage
          src="./images/portraits/siddharth.jpg"
          alt="Portrait of Siddharth Satish"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
  ],
  coreTeamPageTitle: "Codefest 2023 Core Team Members",
  termsPage: {
    title: "Terms & Conditions",
    terms: [
      "No one over the age of 19 is allowed to participate.",
      "Falsification of age or any other personal information will lead to the immediate disqualification of the malefactor",
      "Cyberbullying and harassing are strictly prohibited. This includes but is not limited to: Insulting participants or management, sending distasteful messages or images and threatening others.",
      "The judges' decisions are final.",
      "The management reserves the right to admission. The management reserves the right to make final decisions regarding disputes that may arise.",
      "Sponsor awards earned by the participants are given at the sponsors' discretion. The school and the core team are not liable in the event that sponsor prizes are not awarded to the participants.",
      "Oakridge International reserves all rights to the event and all decision made by Oakridge International are final.",
      "Violation of these conditions will lead to immediate disqualification.",
    ],
  },
}

export default siteData
