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
  Gavel,
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
<span className="var-highlight">Oakridge Codefest</span> 2025 = {"{"} {"\n"}

type: <span className="string-highlight">'24 hour Overnight Hackathon'</span>, {"\n"}
date: <span className="string-highlight">'11th and 12th January, 2025'</span>, {"\n"}
location: <span className="string-highlight">'Oakridge International School, Bengaluru'</span>, {"\n"}
{/* themes:[ {"\n"}
<span className="string-highlight">'Eco-Tourism'</span>, {"\n"}
<span className="string-highlight">'Pedagogical Tools'</span>, {"\n"}
<span className="string-highlight">'Urban Transit'</span>, {"\n"}
<span className="string-highlight">'AI on Edge Compute Platforms'</span>,  {"\n"}
<span className="string-highlight">'Fin-Tech Innovation'</span>,  {"\n"}
<span className="string-highlight">'Game Development (Juniors Only)'</span>, {"\n"}
] */}
themes: <span className="string-highlight">'TBD'</span>
{"\n"}{"}"};
</pre>
)

const juniorSiteData = {
  title: "Dates yet to be announced",
  description: "Oakridge Codefest has been extended to Grades 4-5 to provide a collaborative experience for younger coders.",
}

const siteData = {
  juniorSiteData: juniorSiteData,
  // homepageSections: ["Themes", "Prizes", "FAQ"],
  homepageSections: ["Prizes", "FAQ"],
  registerButton: {
    text: "Register Now!",
    internalUrl: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAChI0I5UMVY5VU5aRkhUOThIQ0ZCNVA1SzNHRU82Ry4u",
    externalUrl: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAChI0I5UMDA1NDBLVkpONVA1R0RRWVVRUEFWSUU2Qi4u",
    internalPrice: "Rs. 1000",
    externalPrice: "Rs. 1500",
    description: "If your team has a member not from Oakridge International School Bangalore, please register as an external (non-Oakridger) team.",
    disabled: false,
  },
  typewriterContent: typewriterContent,
  codefestEndDate: "January 12 2025 10:00:00 GMT+0530",
  introCardSections: [
    {
      icon: <Tungsten sx={{ fontSize: "54px" }} />,
      title: "What is Codefest?",
      content:
        "Oakridge Codefest is India's largest in-person high-school hackathon, providing the opportunity for aspiring developers to showcase their unique talents to both each other and veterans of the industry.",
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
    title: "Themes for Oakridge Codefest (2025)",
    description: (
      <>
        Teams are expected to select one primary theme for their project but are
        allowed and encouraged to choose more secondary themes. Please remember,
        the project ideas are just ideas, not strict guidelines, you have the
        freedom to roam the bounds and innovate within the theme. For more
        information regarding the themes, please email us at{" "}
        <a href="mailto:codefest@oakridge.in">codefest@oakridge.in</a>
      </>
    ),
    themes: [
      [
        {
          name: "Eco-Tourism",
          icon: <LocalFlorist />,
          description: (
            <p>
              Dive into sustainable travel with the Eco-Tourism theme.
              Participants will develop tech-driven solutions to promote
              eco-tourism, facilitating travel that respects nature and local
              cultures while offering educational experiences for travellers.
            </p>
          ),
          example: (
            <p>
              Example Project Ideas: National Park Watchdog App, Green Tour
              Package Planner
            </p>
          ),
        },
        {
          name: "Pedagogical Tools",
          icon: <Book />,
          description: (
            <p>
              This theme invites you to revolutionize the educational sphere by
              creating tools and applications aimed at enhancing teacher
              efficiency. Innovate to empower educators, streamline their
              workflow, and transform the teaching experience.
            </p>
          ),
          example: (
            <p>
              Examples: Virtual Reality Interactive Classroom, Online Quiz
              Software{" "}
            </p>
          ),
        },
        {
          name: "Urban Transit Solutions",
          icon: <DirectionsBus />,
          description: (
            <p>
              This theme focuses on redefining city mobility. Participants will
              craft accessible, user-friendly tech solutions to innovate public
              or private transit systems, making urban transportation more
              efficient and accessible.
            </p>
          ),
          example: (
            <p>
              Example Project Ideas: Crowd Data based Routes Planner, Transit
              Availability Notifier{" "}
            </p>
          ),
        },
      ],
      [
        {
          name: "AI on Edge Compute Platforms",
          icon: <Laptop />,
          description: (
            <p>
              Venture into the world of on-device AI with this theme.
              Participants develop inventive uses of edge computing (processing
              on a local computer such as a laptop or Raspberry Pi) to produce
              compact AI solutions that process data locally, bypassing the
              cloud for faster and more secure on-site decisions.
            </p>
          ),
          example: (
            <p>
              Example Project Ideas: Local-LLM Based Assistant, Offline Facial
              Recognition System
            </p>
          ),
        },
        {
          name: "Fin-Tech Innovation",
          icon: <MonetizationOn />,
          description: (
            <p>
              Explore the vast intersection between finance and technology with
              this theme. Participants may innovate in anything, from developing
              decentralised finance platforms, to increasing the inclusivity and
              accessibility of smart personal savings and investment strategies.
            </p>
          ),
          example: (
            <p>
              Example Project Ideas: Behavioural Personal Finance Tracker, ESG
              Investment Platform{" "}
            </p>
          ),
        },
        {
          name: "Game Development (6-8th Grade)",
          icon: <VideogameAsset />,
          description: (
            <p>
              Discover the thrill of creating whole new digital worlds. We
              invite participants to delve into their imaginations and forge
              realms of their own, infusing creativity and ingenuity into their
              unique and innovative games. This theme is all about breaking
              boundaries and having fun along the way.
            </p>
          ),
          example: null,
        },
      ],
    ],
  },
  prizesSection: {
    cash: "Total cash prize pool of Rs. 1.5L+",
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
            icon: <Event />,
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
            title: "Can we only make software projects?",
            icon: <Laptop />,
            content: (
              <p>
                We accept both software and hardware projects, but all hardware
                components must be brought by the participants.
              </p>
            ),
          },
          {
            title: "How will our projects be judged?",
            icon: <Gavel />,
            content: (
              <p>
                There will be four audit rounds taking place throughout the
                event in which your team will present your progress and plans.
                Based off of these rounds, a select number of teams will be
                shortlisted to present their project in front of a panel of
                judges who will determine the winners.
              </p>
            ),
          },
          {
            title: "What are the timings for the event?",
            icon: <Schedule />,
            content: (
              <p>
                Participants are expected to report to the venue at 8:30 on the
                11th of January, and the event ends at around 14:30 the next
                day. No extra time will be given if you are late.
              </p>
            ),
          },
          {
            title: "Will food be provided during the event?",
            icon: <Restaurant />,
            content: (
              <p>
                Lunch and dinner will be provided for the 11th of January.
                Breakfast and lunch will be provided for the 12th of January for
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
                event if required.
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
                Junior participants are required to report with a teacher supervisor. Senior participants
                must notify us (over e-mail) if they have issues with getting a supervisor so 
                we can make necessary arrangements.
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
                dongles to avoid potential connection issues.
              </p>
            ),
          },
          {
            title: "Should we bring an ID card?",
            icon: <Badge />,
            content: (
              <p>Yes, all participants must carry school ID cards with them.</p>
            ),
          },
          // {
          //   title: "Are we allowed to leave the venue and join back?",
          //   icon: <Logout />,
          //   content: (
          //     <p>
          //       Students are encouraged to stay the entire night until the
          //       closing ceremony ends on the next day. If necessary, they can
          //       leave with their parents on the night of the 20th and return on
          //       the morning of the 21st. A consent form needs to be signed and
          //       provided at the start of the event if they are staying
          //       overnight.
          //     </p>
          //   ),
          // },
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
                The Rs. 1000/Rs. 1500 will cover all services provided by us including
                your snacks, accommodation, and eligibility for the rewards
                provided by our sponsors.
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
                MIT App Inventor. If you are unsure that your software
                Development platform will not be allowed, please don't hesitate
                to mail us to confirm.
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
                If participants are found to be reusing previously written code,
                they will be immediately disqualified.
              </p>
            ),
          },
          {
            title: "Can I submit previously developed projects?",
            icon: <Cached />,
            content: (
              <p>
                No, any submission made to the event must be developed within
                the 24-hour time limit, must adhere to the description provided
                during registration and must fit the selected theme.
              </p>
            ),
          },
        ],
      },
    ],
    timelineSection: {
      title: "Important dates (2024/2025)",
      timeline: [
        {
          title: "Registration Opens",
          icon: <ContactMail />,
          date: "11th of December",
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
          date: "25th of December",
          description: (
            <p>
              The early bird registration period will end on the 1st. After
              this, the registration prices will increase.
            </p>
          ),
        },

        {
          title: "Registration Closes",
          icon: <PendingActions />,
          date: "6th of January",
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
          date: "11th of January",
          description: (
            <p>Participants are expected to reach the campus by 8:30am.</p>
          ),
        },
        {
          title: "Event Ends",
          icon: <Event />,
          date: "12th of January",
          description: (
            <p>
              On this day, the event will end. Shortlisted teams will get the
              chance to present their projects to the judges, after which the
              winners will be announced. Monetary prizes will be sent within 1
              to 2 weeks post the event.
            </p>
          ),
        },
      ],
    },
  },
  sponsorsSection: {
    title: "Event Sponsors",
    sponsorGroups: [
      // {
      //   title: (
      //     <Typography variant="h3" sx={{ marginBottom: "12px" }}>
      //       Financial Partners
      //     </Typography>
      //   ),
      //   sponsorRows: [
      //     [
      //       <Card
      //         elevation={4}
      //         sx={{
      //           width: "24%",
      //           margin: 1.75,
      //           borderRadius: "10px",
      //           overflow: "hidden",
      //         }}
      //       >
      //         <a
      //           href="https://www.innominds.com/about"
      //           target="_blank"
      //           rel="noreferrer"
      //         >
      //           <StaticImage
      //             src="./images/sponsors/innominds.png"
      //             alt="Innominds Logo"
      //             placeholder="blurred"
      //           />
      //         </a>
      //       </Card>,
      //       <Card
      //         elevation={4}
      //         sx={{
      //           width: "24%",
      //           margin: 1.75,
      //           borderRadius: "10px",
      //           overflow: "hidden",
      //         }}
      //       >
      //         <a href="https://dhiway.com/" target="_blank" rel="noreferrer">
      //           <StaticImage
      //             src="./images/sponsors/dhiway.png"
      //             alt="Dhiway Logo"
      //             placeholder="blurred"
      //           />
      //         </a>
      //       </Card>,
      //       <Card
      //         elevation={4}
      //         sx={{
      //           width: "24%",
      //           margin: 1.75,
      //           borderRadius: "10px",
      //           overflow: "hidden",
      //         }}
      //       >
      //         <a href="https://mira.money/" target="_blank" rel="noreferrer">
      //           <StaticImage
      //             src="./images/sponsors/mira.png"
      //             alt="Mira Money Logo"
      //             placeholder="blurred"
      //           />
      //         </a>
      //       </Card>,
      //     ],
      //   ],
      // },
      // {
      //   title: <Typography variant="h4">In-kind Partners</Typography>,
      //   sponsorRows: [
      //     [
      //       <Card
      //         elevation={4}
      //         sx={{
      //           width: "20%",
      //           margin: 2,
      //           borderRadius: "10px",
      //           overflow: "hidden",
      //         }}
      //       >
      //         <a
      //           href="https://www.instagram.com/underthecloche/"
      //           target="_blank"
      //           rel="noreferrer"
      //         >
      //           <StaticImage
      //             src="./images/sponsors/under-the-cloche.png"
      //             alt="Under The Cloche Logo"
      //             placeholder="blurred"
      //           />
      //         </a>
      //       </Card>,
      //       <Card
      //         elevation={4}
      //         sx={{
      //           width: "20%",
      //           margin: 2,
      //           borderRadius: "34px",
      //           overflow: "hidden",
      //         }}
      //       >
      //         <a href="https://modfy.video/" target="_blank" rel="noreferrer">
      //           <StaticImage
      //             src="./images/sponsors/modfy.png"
      //             alt="Modfy Logo"
      //             placeholder="blurred"
      //           />
      //         </a>
      //       </Card>,
      //     ],
      //   ],
      // },
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
    instagramLink: "https://www.instagram.com/oakridgecodefest/",
    githubLink: "https://github.com/oakblr",
    copyrightHolder: "Oakridge Codefest",
  },
  coreTeamMembers: [
    {
      name: "Adithya Bangolae",
      image: (
        <StaticImage
          src="./images/portraits/adithya.jpg"
          alt="Portrait of Adithya Bangolae"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Akshat Shanker Gupta",
      image: (
        <StaticImage
          src="./images/portraits/akshat.jpg"
          alt="Portrait of Akshat Shanker Gupta"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Devansh Popli",
      image: (
        <StaticImage
          src="./images/portraits/sachit.jpg"
          alt="Portrait of Devansh Popli"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Panache Kataria",
      image: (
        <StaticImage
          src="./images/portraits/panache.png"
          alt="Portrait of Panache Kataria"
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
    }
  ],
  coreTeamPageTitle: "Codefest 2025 Core Team Members",
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
