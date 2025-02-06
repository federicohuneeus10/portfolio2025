"use client";
import React from "react";
import { ProfDescContainer } from "./ProfDescription.styles";

export default function ProfDescription() {
  return (
    <ProfDescContainer>
      <p>
        Hi, I'm Federico Huneeus
        <span className="white"> Industrial Civil Engineer</span> from
        <span className="white"> Pontificia Universidad Católica de Chile</span>
      </p>
      <p>
        I work at the moment in{" "}
        <span className="white">building pixel perfect apps</span> that create
        an excellent experience.
      </p>
      <p>
        When I'm not in the computer I enjoy doing sports such as{" "}
        <span className="white"> surfing and boxing</span>, listening to good
        music and{" "}
        <span className="white"> spending time with family and friends</span>
      </p>
    </ProfDescContainer>
  );
}
