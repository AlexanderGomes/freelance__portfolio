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
    live: "http://www.tripplanet.org/",
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
    position: "Backend Engineer",
    responsabilities: ["Collaborated closely with the UI/UX team to create a compelling MVP, leading to the successful approval and progression of the project.", "Developed a robust authentication system that mitigated the risk of fraudulent or multiple credentials, ensuring a secure user registration process.", "Worked in collaboration with the security team to establish and implement best practices, incorporating additional layers of protection that significantly deterred scam users from registering with different credentials."]
  },
  {
    id: 1,
    company: "Fimathe",
    position: "Software Engineer",
    responsabilities: ["Collaborated closely with the Fimathe team to comprehensively implement every aspect of their trading strategy, resulting in the successful automation of a $30 million dollars strategy.", "Successfully minimized slippage from 8 cents to 0.50 cent by streamlining order processing, eliminating unnecessary computations that were previously performed at order time, and precomputing relevant logic.", "Collected and meticulously cleaned 15 years of trading history data, enabling the creation of an advanced analysis system that provides insights on past trading actions at specific price points.", "Implemented the analysis system, which now equips the team with valuable information before every trade, significantly improving accuracy and assisting in the training of a small, initially inexperienced team."]
  }
]