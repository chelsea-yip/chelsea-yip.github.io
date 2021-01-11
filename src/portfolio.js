/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Chelsea Yip",
  logo_name: "Chelsea Yip",
  nickname: "chelsea-yip",
  subTitle:
    "A creative technologist with a drive for building accessible, equitable products for all users.",
  description:
    "I am a New York-based software engineer and UX researcher who loves to create meaningful, efficient experiences for users. With a strong technical background in engineering and academic research, I am uniquely positioned to design, evaluate, and build user experiences.",
  resumeLink:
    "https://drive.google.com/file/d/1HYalA26ipLjzwmlTzQ25IAgrNrzZWy41/view?usp=sharing",
  portfolio_repository: "https://github.com/chelsea-yip/masterPortfolio",
};

const socialMediaLinks = [
  {
    name: "Gmail",
    link: "mailto:cyip@pratt.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#f70505", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chelsea-yip/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/chelsea-yip",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/chel_cplusplus/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build responsive user interfaces with React and Angular",
        "⚡ Develop supporting backend systems with Java and Scala",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
    {
      title: "UX Research & Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Compose, conduct, and analyze user research studies",
        "⚡ Design and iterate UX prototypes ",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Digital Art",
      fileName: "CloudInfraImg",
      skills: ["⚡ Create digital graphics, portraits, and lettering"],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Pratt Institute",
      subtitle: "Master of Science: Information Experience Design",
      logo_path: "pratt_logo.png",
      alt_name: "Pratt",
      duration: "August 2020 - Present",
      descriptions: [
        "The Master of Science in Information Experience Design (IXD) program is an innovative blend of the Information Science (IS), Human-Computer Interaction (HCI), and User Experience (UX) disciplines.",
      ],
      website_link:
        "https://www.pratt.edu/academics/information/degrees/information-experience-design-ms/",
    },
    {
      title: "Vanderbilt University",
      subtitle: "Bachelor of Science: Computer Science, Engineering Management",
      logo_path: "vanderbilt_logo.png",
      alt_name: "Vanderbilt",
      duration: "August 2014 - May 2018",
      descriptions: [
        "The program in Computer Science blends scientific and engineering principles, theoretical analysis, and actual computing experience to provide undergraduate students with a solid foundation in the discipline.",
      ],
      website_link: "https://engineering.vanderbilt.edu/eecs/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Solutions Architect",
      subtitle: "Amazon Web Services",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
      alt_name: "Amazon Web Services",
      color_code: "#252f3d",
    },
    {
      title: "Nichols Humanitarian Fund Service Fellowship",
      subtitle: "Nichols Humanitarian Fund",
      logo_path: "nichols_logo.png",
      certificate_link: "https://www.vanderbilt.edu/nicholsfund/",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "National Security Language Initiative for Youth",
      subtitle: "United States Department of State",
      logo_path: "nsliy_logo.png",
      certificate_link: "https://www.nsliforyouth.org/",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "Open Water Diver",
      subtitle: "Professional Association of Diving Instructors",
      logo_path: "padi_logo.png",
      certificate_link: "https://www.padi.com/courses/open-water-diver",
      alt_name: "deeplearning.ai",
      color_code: "#000000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Industry and Academic Experience",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Developer Experience",
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "Capital One: Consumer Bank",
          company_url: "https://www.capitalone.com/bank/",
          logo_path: "capitalone_logo.png",
          duration: "August 2019 - Present",
          location: "New York, NY",
          description:
            "At Capital One, our mission is to change banking for good by bringing humanity, ingenuity and simplicity to banking.",
          color: "#0879bf",
        },
        {
          title: "Data Engineer",
          company: "Capital One: Small Business Card",
          company_url: "https://www.capitalone.com/small-business-bank/",
          logo_path: "capitalone_logo.png",
          duration: "September 2018 - August 2019",
          location: "New York, NY",
          description:
            "At Capital One, our mission is to change banking for good by bringing humanity, ingenuity and simplicity to banking.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Research Experience",
      experiences: [
        {
          title: "UX Consultant",
          company: "Pratt Center for Digital Experiences",
          company_url: "https://prattdx.org/",
          logo_path: "pratt_logo.png",
          duration: "August 2020 - Present",
          location: "New York, NY",
          description:
            "Housed within the School of Information at Pratt Institute, the mission of the DX Center is to create better digital experiences through the application of a human-centered, ethical approach to the design and evaluation of user interfaces and interactive products.",
          color: "#0879bf",
        },
        {
          title: "HCI Research Assistant",
          company:
            "Vanderbilt Center for Research and Innovation in Systems Safety",
          company_url: "https://criss.app.vumc.org/",
          logo_path: "vanderbilt_logo.png",
          duration: "January 2018 - May 2018",
          location: "Nashville, TN",
          description:
            "The Center for Research and Innovation in Systems Safety (CRISS) conducts basic and applied research in healthcare informatics, patient safety and clinical quality, and designs and evaluates informatics user interfaces, care processes and medical technology across Vanderbilt University Medical Center.",
          color: "#0879bf",
        },
        {
          title: "Neuroscience Research Assistant",
          company: "Vanderbilt Brain Institute",
          company_url: "https://medschool.vanderbilt.edu/brain-institute/",
          logo_path: "vanderbilt_logo.png",
          duration: "January 2015 - January 2016",
          location: "Nashville, TN",
          description:
            "The Vanderbilt Brain Institute is a vibrant community of faculty, staff, students and trainees spread across 24 departments at Vanderbilt, all joined by their common interest in the different levels of neuroscience research.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteer Experience",
      experiences: [
        {
          title: "CODERS",
          company: "Capital One",
          company_url: "https://coders.capitalone.com/",
          logo_path: "capitalone_logo.png",
          duration: "September 2018 - March 2020",
          location: "New York, NY",
          description:
            "Capital One Coders inspires the future generation by educating, mentoring, and empowering students to recognize their potential as technologists.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "The projects collected below are curated to represent both industry and academic experience. Click on any project tile for more information; links will open in a separate tab. For access to further details of proprietary projects, please contact me directly at cyip@pratt.edu.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "To contact me, feel free to contect on LinkedIn or email me directly at cyip@pratt.edu.",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
