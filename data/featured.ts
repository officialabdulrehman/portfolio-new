import { FeaturedI } from "../types/featuredI";

export const featured: FeaturedI[] = [
  {
    name: "Nooberly",
    role: "Sole Backend Engineer",
    category: "Social",
    company: "Centrox AI",
    startedAt: new Date("2021-04-14"),
    endedAt: undefined,
    featured: true,
    image: undefined,
    url: "https://nooberly.com/"
  },
  {
    name: "InstaCured",
    role: "Sole Backend Engineer",
    category: "HealthTech",
    company: "Centrox AI",
    startedAt: new Date("2021-06-14"),
    endedAt: undefined,
    featured: true,
    image: undefined,
    url: "https://www.instacured.com/"
  },
  {
    name: "Socialize",
    role: "Sole FullStack Engineer",
    category: "Social",
    company: "University of Sindh",
    startedAt: new Date("2020-10-01"),
    endedAt: new Date("2021-03-01"),
    featured: true,
    image: undefined,
    url: "https://socialize-graphql.web.app/main"
  },
  {
    name: "Portfolio ( old )",
    role: "Sole Frontend Engineer",
    category: "Social",
    company: "Personal",
    startedAt: new Date("2020-10-01"),
    endedAt: new Date("2021-02-25"),
    featured: false,
    image: undefined,
    url: "https://nizthedev.web.app/"
  },
  {
    name: "Portfolio ( new )",
    role: "Sole Frontend Engineer",
    category: "Social",
    company: "Personal",
    startedAt: new Date("2020-10-01"),
    endedAt: undefined,
    featured: false,
    image: undefined,
    url: "https://portfolio-officialabdulrehman.vercel.app/"
  },
];

export const companies = ["Centrox AI", "University of Sindh", "Personal", "All"]