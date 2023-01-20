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
  SupervisorAccount,
  Schedule,
  Checkroom,
  Backpack,
  Restaurant,
  ReceiptLong,
  Wifi,
  Badge,
  EscalatorWarning,
  Logout,
  Language,
  Bed,
  Bedtime,
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
<span className="string-highlight">'Transportation'</span>, {"\n"}
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
    text: "Registrations closed",
    url: "https://forms.gle/CJ3CEwH33nBvUvgeA",
    disabled: true,
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
        information regarding the themes, please email us at{" "}
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
              Humans around the world commute millions of miles every single
              day. A significant fraction of our day is spent traveling.
              Technology has played a very significant role in enabling more
              people to commute. Technology has fundamentally redefined the way
              we travel. Imagine how technology can improve human experience
              even further in day-to-day transportation and commute. What can
              technology do to make public and private transportation much
              simpler and safer?
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
              technology will be at the crux of maintaining sustainability. From
              new and more efficient uses of energy to combating deforestation,
              technology's importance to sustainability has been especially
              pronounced in recent years. What can you do with technology to
              create a more sustainable world?
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
              with the recent situation of the COVID-19 pandemic, technology has
              been used to create solutions to track and minimize the spread of
              the virus. We look forward to seeing what technological creations
              you will develop to contribute to this field.
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
              Participants need to use programming languages, and drag and
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
    cash: "Total cash prizes worth ₹1,00,000",
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
                The Codefest is an in-person event and will be held at{" "}
                <a
                  href="https://goo.gl/maps/CaQzutByzbpb5LEU6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Oakridge International School, Bangalore
                </a>
              </p>
            ),
          },
          {
            title: "What are the timings for the event?",
            icon: <Schedule />,
            content: (
              <p>
                Participants are expected to report to the venue at 8:30 on the
                21st of January, and the event ends at around 14:00 the next
                day. No extra time will be given if you are late.
              </p>
            ),
          },
          {
            title: "Will food be provided during the event?",
            icon: <Restaurant />,
            content: (
              <p>
                Lunch and dinner will be provided for the 21st of January.
                Breakfast and lunch will be provided for the 22nd of January for
                all participants and mentors.
              </p>
            ),
          },
          {
            title: "What supplies do we need to bring?",
            icon: <Backpack />,
            content: (
              <p>
                Participants need to bring their own laptops and phones as well
                as any other devices or materials they need for their project.
                You are also required to bring your own toiletries and a blanket
                if you need it.
              </p>
            ),
          },
          {
            title: "Will accommodation be provided?",
            icon: <Bed />,
            content: (
              <p>
                The school will provide accommodation and food for all
                participants only during the event. If you want to, you are also
                allowed to bring your own sleeping bags. Participants will have
                to arrange for their own accommodation before and after the
                event if required. Bus transportation will also be provided for
                all Oakridge students.
              </p>
            ),
          },
          {
            title: "Can parents accompany their children?",
            icon: <EscalatorWarning />,
            content: (
              <p>
                Parents can drop their children off and pick them up but cannot
                stay for the event. Teachers will be present at all hours to
                supervise the participants and ensure their safety. Parents will
                also be able to contact their children at any point.
              </p>
            ),
          },
          {
            title:
              "Is it necessary to be accompanied by a mentor/teacher to the venue?",
            icon: <SupervisorAccount />,
            content: (
              <p>
                Participants are advised to report with a teacher. Please notify
                us if there are issues getting a mentor or teacher so we can
                come up with a solution.
              </p>
            ),
          },
          {
            title: "What is the dress code for the event?",
            icon: <Checkroom />,
            content: (
              <p>
                You may wear clothes of your choice as long as they are school
                appropriate.
              </p>
            ),
          },
          {
            title: "Will wifi be provided?",
            icon: <Wifi />,
            content: (
              <p>
                Although free wifi will be provided, you can bring data cards or
                dongles to avoid connection issues.
              </p>
            ),
          },
          {
            title: "Should we bring an ID card?",
            icon: <Badge />,
            content: (
              <p>
                Yes, all participants should carry school ID cards with them.
              </p>
            ),
          },
          {
            title: "Are we allowed to leave the venue and join back?",
            icon: <Logout />,
            content: (
              <p>
                Students are encouraged to stay the entire night until the
                closing ceremony ends on the next day. If necessary, they can
                leave with their parents on the 21st night and return on the
                22nd morning. A consent form needs to be signed and provided at
                the start of the event if they are staying overnight.
              </p>
            ),
          },
          {
            title: "Are we allowed to code overnight with our teammates?",
            icon: <Bedtime />,
            content: (
              <p>
                Since it is a 24-hour hackathon, participants are encouraged to
                stay overnight and work on their projects. We also recommend
                having at least 1 teammate stay overnight to participate in the
                3rd audit. However, this isn't necessary.
              </p>
            ),
          },
          {
            title: "What does my registration fee go towards?",
            icon: <MonetizationOn />,
            content: (
              <p>
                The ₹500 will cover all services provided by us including your
                snacks, accommodation, and eligibility for the rewards provided
                by our sponsors.
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
                your solutions, except drag-and-drop software like Scratch or
                MIT App Inventor.
              </p>
            ),
          },
          {
            title: "Do we need to have the idea/solution fully working?",
            icon: <LightbulbOutlined />,
            content: (
              <p>
                The entire idea need not be implemented. However, the submission
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
                The developer(s) of the application will have all rights and own
                the IP of the product. However, all code needs to be in the
                public domain (open source) so that it can be evaluated by the
                judges.
              </p>
            ),
          },
          {
            title: "What do participants need to prepare before the event?",
            icon: <ReceiptLong />,
            content: (
              <p>
                Nothing relating to the project can be prepared beforehand. All
                code and assets for the project, as well as any presentation the
                participants wish to create, must be created during the event.
              </p>
            ),
          },
          {
            title: "Can I submit previously developed projects?",
            icon: <Cached />,
            content: (
              <p>
                No, any submission made to the event must be developed within
                the 24-hour time limit and must fit the selected theme.
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
              Participants are expected to sign up for the event and submit
              their idea for what they are going to create at the event.
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
              registered participants will receive a confirmation email.
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
                width: "24%",
                margin: 1.75,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <a
                href="https://www.innominds.com/about"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  src="./images/sponsors/innominds.png"
                  alt="Innominds Logo"
                  placeholder="blurred"
                />
              </a>
            </Card>,
            <Card
              elevation={4}
              sx={{
                width: "24%",
                margin: 1.75,
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
            <Card
              elevation={4}
              sx={{
                width: "24%",
                margin: 1.75,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <a href="https://mira.money/" target="_blank" rel="noreferrer">
                <StaticImage
                  src="./images/sponsors/mira.png"
                  alt="Mira Money Logo"
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
      "Falsification of age or any other personal information will lead to the immediate disqualification of the malefactor.",
      "Cyberbullying and harassing are strictly prohibited. This includes but is not limited to: Insulting participants or management, sending distasteful messages or images, and threatening others.",
      "The judges' decisions are final.",
      "The management reserves the right to admission. The management reserves the right to make final decisions regarding disputes that may arise.",
      "Sponsor awards earned by the participants are given at the sponsors' discretion. The school and the core team are not liable in the event that sponsor prizes are not awarded to the participants.",
      "Oakridge International reserves all rights to the event, and all decisions made by Oakridge International are final.",
      "Violation of these conditions will lead to immediate disqualification.",
    ],
  },
}

export default siteData
