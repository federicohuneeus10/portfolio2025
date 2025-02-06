"use client";
import React from "react";
import { ExpItemContainer } from "./ExpItem.styles";

interface ExpItemProps {
  startDate: string;
  endDate: string;
  jobTitle: string;
  company: string;
  description: string[];
  skills: string[];
  link: string | undefined;
}

export default function ExpItem({
  startDate,
  endDate,
  jobTitle,
  company,
  description,
  skills,
  link,
}: ExpItemProps) {
  return (
    <ExpItemContainer>
      <div className="row gap-0">
        <div className="col w-auto">
          <div className="dates">
            <span>{`${startDate} ${
              endDate !== "" ? "- " + endDate : ""
            }`}</span>
          </div>
        </div>
        <div className="col w-content">
          <div className="job-title-container">
            <h2>
              {jobTitle} · {company}
            </h2>
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            ) : (
              <></>
            )}
          </div>

          <h3>{jobTitle}</h3>
          <ul>
            {description.map((bPoint, key) => {
              return <li key={key}>{bPoint}</li>;
            })}
          </ul>
          <div className="skills-container">
            {skills.map((s, key) => {
              return (
                <div className="item" key={key}>
                  <span>{s}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ExpItemContainer>
  );
}
