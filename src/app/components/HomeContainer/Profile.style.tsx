"use client";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;

  .row {
    display: flex;
    flex-direction: row;
    gap: 64px;
    width: 100%;

    @media (max-width: 800px) {
      flex-direction: column;
      gap: 24px;
    }
  }
  .col {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 50%;

    @media (max-width: 800px) {
      width: 100%;
    }

    &.profile {
      position: fixed;

      @media (max-width: 1100px) {
        position: initial;
      }
      @media (max-width: 800px) {
        width: 100%;
      }
    }
  }

  .profile-col-wrapper {
    position: relative;
    width: 50%;

    @media (max-width: 1100px) {
      width: 100%;
    }
  }
`;
