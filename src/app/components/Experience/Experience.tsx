"use client";
import React from "react";
import { ExperienceContainer } from "./Experience.styles";
import ExpItem from "./components/ExpItem/ExpItem";

export default function Experience() {
  const workExperience = [
    {
      startDate: "2022",
      endDate: "Present",
      jobTitle: "Software Engineer",
      company: "Ria Money Transfer",
      description: [
        "Implemented scrum methodology for continuous enhancement of www.riamoneytransfer.com, achieving a redesign and development of key features of the web app and migrating from Gatsby to NextJS",
        "Collaborated with a team of 4 front-end developers, a QA tester, UI/UX designer, Product Owner and Tech Lead",
        "Used Jira for task management, translating Figma designs into UI, and integrating with API endpoints and external services",
        "Work and meetings done in English",
      ],
      skills: [
        "JavaScript",
        "React",
        "NextJS",
        "Git",
        "Github",
        "Gatsby",
        "Azure",
        "Figma",
        "SCSS",
        "Netlify",
        "Prismic",
        "Slicemachine",
      ],
      link: "https://www.riamoneytransfer.com",
      image: "/assets/ria.png",
    },
    {
      startDate: "2023",
      endDate: "Present",
      jobTitle: "Lead FrontEnd Engineer and UI Designer",
      company: "Dogin",
      description: [
        "Built from scratch the front end of a web app that allows dog owners to hire dog carers for dog care services.",
        "Sole front-end developer for web app, designing screens, typography, colors, paddings an developing for both desktop and mobile",
        "Collaborated with the CEO to plan and execute a successful development roadmap with achieved deadlines",
        "Coordinated with backend developer, managing endpoints for data integration (CRUD APIs)",
      ],
      skills: [
        "TypeScript",
        "Angular",
        "Git",
        "Github",
        "Figma",
        "Netlify",
        "CSS",
        "Railway",
      ],
      link: "https://www.dogin.cl",
      image: "/assets/dogin.png",
    },
    {
      startDate: "2024",
      endDate: "2025",
      jobTitle: "Lead FrontEnd Engineer",
      company: "Transmarko",
      description: [
        "Built from scratch website for Transmarko based on an AdobeXD design",
      ],
      skills: [
        "TypeScript",
        "React",
        "NextJS",
        "Git",
        "Github",
        "AdobeXD",
        "Netlify",
        "CSS",
      ],
      link: "https://transmarko.netlify.app",
      image: "/assets/transmarko.png",
    },
    {
      startDate: "2021",
      endDate: "",
      jobTitle: "Product Owner",
      company: "Macal",
      description: [
        "Creation and implementation of projects",
        "Creation and implementation of the option to purchase cars using car finance",
        "Involved working with 2 designers, 3 developers, 2 ops persons and 1 at marketing to deliver the project",
      ],
      skills: ["Project Management", "Product Ownership"],
    },
    {
      startDate: "2020",
      endDate: "",
      jobTitle: "Project Engineer",
      company: "Copec",
      description: [
        "Analysed two projects financially, gaining approval for one. Executed by visiting stores, managing logistics, negotiating with three suppliers, and coordinating marketing for the successful launch of a new mascot washing service.",
        "Mobile app proposal: analysis of final client (taxi drivers), interviewing 30 taxi drivers. Did the customer journey, analysed pain points, wishes and desires, achieving creating a business proposal for a mobile app to be developed in a year.",
      ],
      skills: ["Project Management", "Product Ownership"],
    },
    {
      startDate: "2018",
      endDate: "2019",
      jobTitle: "Project Manager",
      company: "I2B Tech",
      description: [
        "Development and sale of Web App: leadership in the development of a Web App oriented towards online training for outplacement, sold in $107.000 USD. Led a team formed by front-end developers, a ui/ux designer, and a software architect.",
        "Contact with stakeholders: direct involvement in meetings three times a week with General Managers, Clients and Users, creating the customer journey. Created business requirements for a web app, which we developed in a period of 7 months.",
      ],
      skills: [
        "Project Management",
        "Product Ownership",
        "Scrum Master",
        "UI/UX Design",
      ],
    },
  ];

  return (
    <ExperienceContainer>
      {workExperience.map((wExp, key) => {
        return (
          <ExpItem
            startDate={wExp.startDate}
            endDate={wExp.endDate}
            jobTitle={wExp.jobTitle}
            company={wExp.company}
            description={wExp.description}
            skills={wExp.skills}
            key={key}
            link={wExp.link}
            image={wExp.image}
          />
        );
      })}
    </ExperienceContainer>
  );
}
