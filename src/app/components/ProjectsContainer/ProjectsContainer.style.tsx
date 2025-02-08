"use client";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
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

  .projects-col-wrapper {
    position: relative;
    width: 50%;

    @media (max-width: 1100px) {
      width: 100%;
    }

    .project-container {
      @media (max-width: 600px) {
        padding-top: 24px;
      }

      .title {
        display: flex;
        flex-direction: row;
        align-items: center;

        h2 {
          color: #fff;
          padding-right: 8px;
        }
        a {
          display: flex;
          width: 24px;
          height: 24px;
          height: auto;
          svg {
            fill: #fff;
          }
        }
      }

      .dates-container {
        padding-top: 16px;
        .date {
          color: rgb(148, 163, 184);
        }
        .line {
          background: rgb(148, 163, 184);
          width: 30px;
        }
      }
      .bullet-points-container {
        padding-top: 16px;
        ul {
          margin-left: 16px;
          li {
            padding-top: 8px;
            color: rgb(148, 163, 184);
          }
        }
      }
      .images-container {
        display: flex;
        flex-direction: column;
        padding-top: 24px;
        gap: 16px;
        .img-container {
          padding: 24px;
          @media (max-width: 600px) {
            padding: 0;
            img {
              width: 300px;
            }
          }
        }
        .proj-img {
          border-radius: 10px;
        }
      }
    }
  }
`;
