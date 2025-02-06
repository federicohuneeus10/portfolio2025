"use client";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  h2 {
    padding-top: 8px;
  }
  p {
    color: rgb(148, 163, 184);
    padding-top: 16px;
  }

  .social-media {
    display: flex;
    padding-top: 16px;
    a {
      display: flex;
    }
    svg {
      width: 24px;
      height: 24px;
      fill: rgb(148, 163, 184);
    }
  }
`;
