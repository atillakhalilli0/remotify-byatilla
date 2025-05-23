const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      companyId: 101,
      location: "Remote - US",
      tags: ["React", "JavaScript", "CSS"],
      type: "Full-Time",
      datePosted: "2025-04-20",
      remote: true,
      salary: "$85k - $105k",
      description:
        "Build beautiful UIs using React and Tailwind. You'll work with a small, remote-first team to ship high-quality features.",
    },
    {
      id: 2,
      title: "Backend Engineer",
      companyId: 102,
      location: "Remote - Europe",
      tags: ["Node.js", "MongoDB", "AWS"],
      type: "Contract",
      datePosted: "2025-04-22",
      remote: true,
      salary: "$60/hr",
      description:
        "Help scale our API and work with serverless infrastructure to manage backend complexity.",
    },
    {
      id: 3,
      title: "Product Designer",
      companyId: 103,
      location: "Remote - Global",
      tags: ["Figma", "UX", "Design Systems"],
      type: "Part-Time",
      datePosted: "2025-04-18",
      remote: true,
      salary: "$45/hr",
      description:
        "You'll lead our design vision and collaborate with frontend devs to deliver a seamless product experience.",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      companyId: 104,
      location: "Berlin, Germany",
      tags: ["Docker", "Kubernetes", "CI/CD"],
      type: "Full-Time",
      datePosted: "2025-04-25",
      remote: false,
      salary: "€70k - €90k",
      description:
        "Build and maintain our cloud infrastructure. Experience with containerization and orchestration is required.",
    },
    {
      id: 5,
      title: "Data Scientist",
      companyId: 105,
      location: "Remote - US",
      tags: ["Python", "Machine Learning", "SQL"],
      type: "Full-Time",
      datePosted: "2025-04-19",
      remote: true,
      salary: "$110k - $140k",
      description:
        "Apply statistical models to derive insights from our large-scale customer datasets.",
    },
    {
      id: 6,
      title: "Mobile Developer",
      companyId: 106,
      location: "San Francisco, CA",
      tags: ["React Native", "iOS", "Android"],
      type: "Full-Time",
      datePosted: "2025-04-23",
      remote: false,
      salary: "$100k - $130k",
      description:
        "Create cross-platform mobile applications using React Native for our consumer-facing products.",
    },
    {
      id: 7,
      title: "Technical Writer",
      companyId: 107,
      location: "Remote - Global",
      tags: ["Documentation", "Markdown", "Technical Communication"],
      type: "Contract",
      datePosted: "2025-04-21",
      remote: true,
      salary: "$45/hr",
      description:
        "Document our APIs and create technical guides for our developer community.",
    },
    {
      id: 8,
      title: "QA Engineer",
      companyId: 108,
      location: "Toronto, Canada",
      tags: ["Selenium", "TestNG", "Automated Testing"],
      type: "Full-Time",
      datePosted: "2025-04-24",
      remote: false,
      salary: "CAD 75k - CAD 95k",
      description:
        "Design and implement automated test cases to ensure product quality and stability.",
    },
    {
      id: 9,
      title: "Full Stack Developer",
      companyId: 109,
      location: "Remote - US",
      tags: ["JavaScript", "React", "Node.js"],
      type: "Full-Time",
      datePosted: "2025-04-17",
      remote: true,
      salary: "$90k - $120k",
      description:
        "Work across our entire stack to implement new features and improve application performance.",
    },
    {
      id: 10,
      title: "UI/UX Designer",
      companyId: 110,
      location: "London, UK",
      tags: ["Figma", "User Research", "Prototyping"],
      type: "Full-Time",
      datePosted: "2025-04-26",
      remote: false,
      salary: "£55k - £70k",
      description:
        "Create user-centered designs for our web and mobile applications.",
    },
    {
      id: 11,
      title: "Site Reliability Engineer",
      companyId: 111,
      location: "Remote - US",
      tags: ["AWS", "Terraform", "Monitoring"],
      type: "Full-Time",
      datePosted: "2025-04-15",
      remote: true,
      salary: "$120k - $150k",
      description:
        "Maintain and improve our infrastructure reliability and performance. On-call rotation required.",
    },
    {
      id: 12,
      title: "Machine Learning Engineer",
      companyId: 112,
      location: "Seattle, WA",
      tags: ["Python", "TensorFlow", "Computer Vision"],
      type: "Full-Time",
      datePosted: "2025-04-28",
      remote: false,
      salary: "$130k - $160k",
      description:
        "Deploy machine learning models to production and optimize their performance.",
    },
    {
      id: 13,
      title: "Content Strategist",
      companyId: 113,
      location: "Remote - Global",
      tags: ["Content Marketing", "SEO", "Copywriting"],
      type: "Part-Time",
      datePosted: "2025-04-16",
      remote: true,
      salary: "$40/hr",
      description:
        "Develop content strategies that engage our audience and support our product marketing efforts.",
    },
    {
      id: 14,
      title: "Security Engineer",
      companyId: 114,
      location: "Austin, TX",
      tags: ["Penetration Testing", "Security Audits", "Compliance"],
      type: "Full-Time",
      datePosted: "2025-04-29",
      remote: false,
      salary: "$110k - $140k",
      description:
        "Identify and mitigate security vulnerabilities across our software and infrastructure.",
    },
    {
      id: 15,
      title: "Growth Marketer",
      companyId: 115,
      location: "Remote - US",
      tags: ["Digital Marketing", "Analytics", "A/B Testing"],
      type: "Full-Time",
      datePosted: "2025-04-14",
      remote: true,
      salary: "$80k - $100k",
      description:
        "Drive user acquisition and engagement through data-driven marketing strategies.",
    },
    {
      id: 16,
      title: "Blockchain Developer",
      companyId: 116,
      location: "Zurich, Switzerland",
      tags: ["Solidity", "Smart Contracts", "Web3"],
      type: "Full-Time",
      datePosted: "2025-04-30",
      remote: false,
      salary: "CHF 120k - CHF 150k",
      description:
        "Design and implement secure blockchain solutions for fintech applications.",
    },
    {
      id: 17,
      title: "Customer Success Manager",
      companyId: 117,
      location: "Remote - US",
      tags: ["Client Relations", "SaaS", "Onboarding"],
      type: "Full-Time",
      datePosted: "2025-04-13",
      remote: true,
      salary: "$75k - $95k",
      description:
        "Ensure our enterprise customers are successful in implementing and using our products.",
    },
    {
      id: 18,
      title: "Game Developer",
      companyId: 118,
      location: "Montreal, Canada",
      tags: ["Unity", "C#", "3D Modeling"],
      type: "Full-Time",
      datePosted: "2025-05-01",
      remote: false,
      salary: "CAD 85k - CAD 110k",
      description:
        "Create interactive game mechanics and optimize performance for our upcoming mobile game.",
    },
    {
      id: 19,
      title: "Scrum Master",
      companyId: 119,
      location: "Remote - Europe",
      tags: ["Agile", "JIRA", "Team Facilitation"],
      type: "Contract",
      datePosted: "2025-04-12",
      remote: true,
      salary: "€50/hr",
      description:
        "Facilitate agile ceremonies and remove impediments for multiple development teams.",
    },
    {
      id: 20,
      title: "Database Administrator",
      companyId: 120,
      location: "Chicago, IL",
      tags: ["PostgreSQL", "Database Optimization", "Data Migration"],
      type: "Full-Time",
      datePosted: "2025-05-02",
      remote: false,
      salary: "$95k - $120k",
      description:
        "Manage and optimize our database infrastructure for performance and reliability.",
    },
    {
      id: 21,
      title: "Technical Product Manager",
      companyId: 121,
      location: "Remote - US",
      tags: ["Product Strategy", "Roadmapping", "User Stories"],
      type: "Full-Time",
      datePosted: "2025-04-11",
      remote: true,
      salary: "$100k - $130k",
      description:
        "Define product vision and work with engineering teams to deliver valuable features.",
    },
    {
      id: 22,
      title: "AI Research Scientist",
      companyId: 122,
      location: "Boston, MA",
      tags: ["Deep Learning", "NLP", "Research"],
      type: "Full-Time",
      datePosted: "2025-05-03",
      remote: false,
      salary: "$140k - $180k",
      description:
        "Conduct research in natural language processing and develop novel AI algorithms.",
    },
    {
      id: 23,
      title: "Community Manager",
      companyId: 123,
      location: "Remote - Global",
      tags: ["Community Engagement", "Social Media", "Events"],
      type: "Part-Time",
      datePosted: "2025-04-10",
      remote: true,
      salary: "$35/hr",
      description:
        "Build and nurture our developer community through online engagement and virtual events.",
    },
    {
      id: 24,
      title: "Embedded Systems Engineer",
      companyId: 124,
      location: "Munich, Germany",
      tags: ["C/C++", "Firmware", "IoT"],
      type: "Full-Time",
      datePosted: "2025-05-04",
      remote: false,
      salary: "€80k - €100k",
      description:
        "Develop firmware for our IoT devices and optimize for power efficiency.",
    },
    {
      id: 25,
      title: "Sales Development Representative",
      companyId: 125,
      location: "Remote - US",
      tags: ["B2B Sales", "Prospecting", "CRM"],
      type: "Full-Time",
      datePosted: "2025-04-09",
      remote: true,
      salary: "$60k - $80k + Commission",
      description: "Identify and qualify leads for our enterprise SaaS solution.",
    },
    {
      id: 26,
      title: "AR/VR Developer",
      companyId: 126,
      location: "Los Angeles, CA",
      tags: ["Unity", "AR Kit", "3D Development"],
      type: "Full-Time",
      datePosted: "2025-05-05",
      remote: false,
      salary: "$110k - $140k",
      description:
        "Create immersive augmented reality experiences for our mobile applications.",
    },
    {
      id: 27,
      title: "Digital Accessibility Specialist",
      companyId: 127,
      location: "Remote - Global",
      tags: ["WCAG", "Screen Readers", "Accessibility Testing"],
      type: "Contract",
      datePosted: "2025-04-08",
      remote: true,
      salary: "$55/hr",
      description:
        "Ensure our digital products meet accessibility standards and are usable by people with disabilities.",
    },
    {
      id: 28,
      title: "Ruby on Rails Developer",
      companyId: 128,
      location: "Stockholm, Sweden",
      tags: ["Ruby", "Rails", "PostgreSQL"],
      type: "Full-Time",
      datePosted: "2025-05-06",
      remote: false,
      salary: "SEK 550k - SEK 700k",
      description:
        "Maintain and improve our Rails-based web application serving millions of users.",
    },
    {
      id: 29,
      title: "SEO Specialist",
      companyId: 129,
      location: "Remote - US",
      tags: ["SEO", "Analytics", "Content Optimization"],
      type: "Full-Time",
      datePosted: "2025-04-07",
      remote: true,
      salary: "$70k - $90k",
      description:
        "Improve our organic search rankings and drive traffic to our website.",
    },
    {
      id: 30,
      title: "Cloud Solutions Architect",
      companyId: 130,
      location: "Singapore",
      tags: ["AWS", "Azure", "Cloud Migration"],
      type: "Full-Time",
      datePosted: "2025-05-07",
      remote: false,
      salary: "SGD 120k - SGD 160k",
      description:
        "Design and implement cloud-based solutions for our enterprise customers.",
    },
    {
      id: 31,
      title: "Data Engineer",
      companyId: 131,
      location: "Remote - US",
      tags: ["Python", "Apache Spark", "ETL"],
      type: "Full-Time",
      datePosted: "2025-04-06",
      remote: true,
      salary: "$100k - $130k",
      description:
        "Build data pipelines and infrastructure to support our analytics and machine learning teams.",
    },
    {
      id: 32,
      title: "Cybersecurity Analyst",
      companyId: 132,
      location: "Washington, DC",
      tags: ["Threat Detection", "SIEM", "Incident Response"],
      type: "Full-Time",
      datePosted: "2025-04-27",
      remote: false,
      salary: "$90k - $120k",
      description:
        "Monitor our systems for security threats and respond to security incidents.",
    },
    {
      id: 33,
      title: "Localization Specialist",
      companyId: 133,
      location: "Remote - Global",
      tags: ["Translation", "Cultural Adaptation", "i18n"],
      type: "Part-Time",
      datePosted: "2025-04-05",
      remote: true,
      salary: "$40/hr",
      description:
        "Adapt our product for international markets by managing translations and cultural considerations.",
    },
    {
      id: 34,
      title: "Golang Developer",
      companyId: 134,
      location: "Amsterdam, Netherlands",
      tags: ["Go", "Microservices", "Docker"],
      type: "Full-Time",
      datePosted: "2025-04-28",
      remote: false,
      salary: "€65k - €85k",
      description:
        "Build high-performance microservices using Go for our fast-growing platform.",
    },
    {
      id: 35,
      title: "Product Marketing Manager",
      companyId: 135,
      location: "Remote - US",
      tags: ["Go-to-Market", "Positioning", "Customer Research"],
      type: "Full-Time",
      datePosted: "2025-04-04",
      remote: true,
      salary: "$90k - $115k",
      description:
        "Develop positioning and messaging that differentiates our products in the market.",
    },
    {
      id: 36,
      title: "Rust Developer",
      companyId: 136,
      location: "Vancouver, Canada",
      tags: ["Rust", "Systems Programming", "Performance"],
      type: "Full-Time",
      datePosted: "2025-04-29",
      remote: false,
      salary: "CAD 100k - CAD 130k",
      description:
        "Build high-performance, memory-safe systems components using Rust.",
    },
    {
      id: 37,
      title: "User Researcher",
      companyId: 137,
      location: "Remote - Europe",
      tags: ["User Testing", "Interviews", "Usability"],
      type: "Contract",
      datePosted: "2025-04-03",
      remote: true,
      salary: "€45/hr",
      description:
        "Conduct user research to inform our product design decisions.",
    },
    {
      id: 38,
      title: "PHP Developer",
      companyId: 138,
      location: "Dublin, Ireland",
      tags: ["PHP", "Laravel", "MySQL"],
      type: "Full-Time",
      datePosted: "2025-04-30",
      remote: false,
      salary: "€60k - €80k",
      description:
        "Maintain and enhance our PHP-based web applications and services.",
    },
    {
      id: 39,
      title: "Business Intelligence Analyst",
      companyId: 139,
      location: "Remote - US",
      tags: ["SQL", "Data Visualization", "Tableau"],
      type: "Full-Time",
      datePosted: "2025-04-02",
      remote: true,
      salary: "$85k - $110k",
      description:
        "Create dashboards and reports to help our teams make data-driven decisions.",
    },
    {
      id: 40,
      title: "iOS Developer",
      companyId: 140,
      location: "Sydney, Australia",
      tags: ["Swift", "UIKit", "iOS SDK"],
      type: "Full-Time",
      datePosted: "2025-05-01",
      remote: false,
      salary: "AUD 110k - AUD 140k",
      description:
        "Develop and maintain our iOS applications with a focus on performance and user experience.",
    },
    {
      id: 41,
      title: "Technical Support Engineer",
      companyId: 141,
      location: "Remote - Global",
      tags: ["Customer Support", "Troubleshooting", "Documentation"],
      type: "Full-Time",
      datePosted: "2025-04-01",
      remote: true,
      salary: "$60k - $80k",
      description:
        "Provide technical support to our customers and help them resolve complex product issues.",
    },
    {
      id: 42,
      title: "Android Developer",
      companyId: 142,
      location: "Berlin, Germany",
      tags: ["Kotlin", "Android SDK", "Jetpack Compose"],
      type: "Full-Time",
      datePosted: "2025-05-02",
      remote: false,
      salary: "€65k - €85k",
      description:
        "Build modern Android applications using Kotlin and Jetpack Compose.",
    },
    {
      id: 43,
      title: "Financial Analyst",
      companyId: 143,
      location: "Remote - US",
      tags: ["Financial Modeling", "Forecasting", "Excel"],
      type: "Full-Time",
      datePosted: "2025-03-31",
      remote: true,
      salary: "$80k - $100k",
      description:
        "Develop financial models and forecasts to support business decisions.",
    },
    {
      id: 44,
      title: "Python Developer",
      companyId: 144,
      location: "Bangalore, India",
      tags: ["Python", "Django", "REST APIs"],
      type: "Full-Time",
      datePosted: "2025-05-03",
      remote: false,
      salary: "INR 1800k - INR 2400k",
      description:
        "Build scalable web applications using Python and Django framework.",
    },
    {
      id: 45,
      title: "UX Researcher",
      companyId: 145,
      location: "Remote - Global",
      tags: ["User Testing", "Interviews", "Personas"],
      type: "Part-Time",
      datePosted: "2025-03-30",
      remote: true,
      salary: "$50/hr",
      description:
        "Plan and conduct user research studies to inform our product development.",
    },
    {
      id: 46,
      title: "Elixir Developer",
      companyId: 146,
      location: "Stockholm, Sweden",
      tags: ["Elixir", "Phoenix", "Distributed Systems"],
      type: "Full-Time",
      datePosted: "2025-05-04",
      remote: false,
      salary: "SEK 600k - SEK 750k",
      description:
        "Build scalable, fault-tolerant applications using Elixir and the Phoenix framework.",
    },
    {
      id: 47,
      title: "Customer Experience Manager",
      companyId: 147,
      location: "Remote - US",
      tags: ["Customer Journey", "CX Strategy", "Voice of Customer"],
      type: "Full-Time",
      datePosted: "2025-03-29",
      remote: true,
      salary: "$75k - $95k",
      description:
        "Develop strategies to improve our customer experience across all touchpoints.",
    },
    {
      id: 48,
      title: "C++ Developer",
      companyId: 148,
      location: "Tokyo, Japan",
      tags: ["C++", "Game Development", "Performance Optimization"],
      type: "Full-Time",
      datePosted: "2025-05-05",
      remote: false,
      salary: "JPY 7000k - JPY 9000k",
      description:
        "Develop high-performance C++ applications for our gaming platform.",
    },
    {
      id: 49,
      title: "HR Business Partner",
      companyId: 149,
      location: "Remote - Europe",
      tags: ["HR Strategy", "Employee Relations", "Talent Management"],
      type: "Full-Time",
      datePosted: "2025-03-28",
      remote: true,
      salary: "€60k - €80k",
      description:
        "Partner with leaders across the organization to develop and implement HR strategies.",
    },
    {
      id: 50,
      title: "Vue.js Developer",
      companyId: 150,
      location: "Paris, France",
      tags: ["Vue.js", "JavaScript", "Frontend"],
      type: "Full-Time",
      datePosted: "2025-05-06",
      remote: false,
      salary: "€55k - €75k",
      description:
        "Build dynamic user interfaces using Vue.js for our web applications.",
    },
  ];
  
  export default jobs;
  