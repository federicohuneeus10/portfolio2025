"use client";
import React from "react";
import { TimelineContainer } from "./Timeline.styles";
import { useState } from "react";
import Link from "next/link";

export default function Timeline() {
  const items = ["Home", "About", "Projects"];

  type ActiveState = Record<string, boolean>;

  const [active, setIsActive] = useState<ActiveState>(
    items.reduce((acc, item) => ({ ...acc, [item]: false }), {})
  );

  return (
    <TimelineContainer>
      {items.map((i, index) => {
        return (
          <Link href={`${i !== "Home" ? i.toLowerCase() : "/"}`} key={index}>
            <div
              className={`item-container ${active[i] ? "hovered" : ""}`}
              onMouseEnter={() =>
                setIsActive((prev) => ({ ...prev, [i]: true }))
              }
              onMouseLeave={() =>
                setIsActive((prev) => ({ ...prev, [i]: false }))
              }
            >
              <div className="line"></div>
              <span className="text">{i}</span>
            </div>
          </Link>
        );
      })}
    </TimelineContainer>
  );
}
