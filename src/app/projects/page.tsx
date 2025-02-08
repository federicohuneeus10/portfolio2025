"use client";
import styles from "../page.module.css";
import { ProjectsContainer } from "../components/ProjectsContainer/ProjectsContainer.style";
import Profile from "../components/Profile/Profile";
import Timeline from "../components/Timeline/Timeline";
import PageLink from "../components/PageLink/PageLink";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Transmarko",
      startDate: 2024,
      endDate: 2024,
      description:
        "Web app built for naval transport company in the south of Chile",
      bulletPoints: [
        "Built from Adobe XD design, pixel perfect for desktop and mobile",
        "Features 10 different pages",
        "Built with NextJS using slices as main divisions",
      ],
      url: "https://transmarko.netlify.app",
      imgs: [
        "/assets/trans1.png",
        "/assets/trans2.png",
        "/assets/trans3.png",
        "/assets/trans4.png",
        "/assets/trans5.png",
      ],
    },
    {
      title: "Pomodoro timer",
      startDate: 2024,
      endDate: 2024,
      description:
        "Pomodoro timer app built to organize your time, rest, and work productively",
      bulletPoints: [
        "Built from design I made in Figma",
        "Features three different modes - Pomodoro, Short Break, and Long Break",
        "Customizable timer duration",
      ],
      url: "https://imaginative-donut-db4201.netlify.app/",
      imgs: ["/assets/pomodoro1.png"],
    },
  ];

  return (
    <div className={styles.page}>
      <ProjectsContainer>
        <div className="row">
          <div className="profile-col-wrapper">
            <div className="col profile">
              <Profile />
              <Timeline />
            </div>
          </div>
          <div className="projects-col-wrapper">
            {projects.map((p, index) => {
              return (
                <div className="project-container" key={index}>
                  <div className="title">
                    <h2>{p.title}</h2>
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      <PageLink />
                    </a>
                  </div>
                  <div className="dates-container">
                    {p.startDate !== p.endDate && (
                      <>
                        <span className="date">{p.startDate}</span>
                        <div className="line"></div>
                        <span className="date">{p.endDate}</span>
                      </>
                    )}
                    {p.startDate === p.endDate && (
                      <span className="date">{p.startDate}</span>
                    )}
                  </div>
                  <div className="bullet-points-container">
                    <ul>
                      {p.bulletPoints.map((bulletPoint, index) => {
                        return <li key={index}>{bulletPoint}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="images-container">
                    {p.imgs.map((img, index) => {
                      return (
                        <div className="img-container">
                          <img
                            key={index}
                            src={img}
                            alt={`Project image ${index + 1}`}
                            className="proj-img"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ProjectsContainer>
    </div>
  );
}
