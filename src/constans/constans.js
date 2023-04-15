import { Daycare, Trip, Mentor } from "../assets";

export const projects = [
  {
    id: 0,
    title: "Gomes Daycare",
    desc: "management system automation",
    image: Daycare,
    github: "https://github.com/AlexanderGomes/daycare",
    live: "https://gomesdaycare.herokuapp.com/",
  },
  {
    id: 1,
    title: "Trip Planner",
    desc: "real time voting platform",
    image: Trip,
    github: "https://github.com/AlexanderGomes/daycare-activity-trip",
    live: "https://www.tripplanet.org/",
  },
  {
    id: 2,
    title: "CareerConnect",
    desc: "Upwork prototype",
    image: Mentor,
    github: "https://github.com/AlexanderGomes/mentorship",
    live: "https://mentorship101.herokuapp.com/",
  },
];


export const history = [
  {
    id: 0,
    company: "Connective",
    position: "Full Stack egineer",
    responsabilities: ["Worked with UI/UX designers to build an MVP that convinced the company to proceed with the project.", "Contributed to the development of the authentication process, as well as the verification of user identity with Stripe Identity", "Assisted with the documentation and implementation of Stripe Connect, allowing our sellers to be paid and our clients to be protected", "Came up with the idea of using Amazon rekognition to get a face ID of each user as part of our blacklisting method, making it harder for users to re-register under different credentials."]
  },
  {
    id: 1,
    company: "Freelance",
    position: "Backend engineer",
    responsabilities: ["Took on an undocumented Mern project and made it easier for the next team to understand without requiring too much time and effort.", "Implemented Elasticsearch to improve performance when querying large quantities of products and memcached to avoid hitting the database too often for non-changed information"]
  }
]