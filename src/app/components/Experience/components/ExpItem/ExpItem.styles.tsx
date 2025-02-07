"use client";
import styled from "styled-components";

export const ExpItemContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  p {
    color: rgb(148, 163, 184);
    padding-top: 16px;

    .white {
      color: #fff;
    }
  }

  .row.gap-0 {
    gap: 24px;
    padding: 32px 32px;
    border-radius: 16px;
    &:hover {
      background-color: rgba(23, 34, 62, 0.4);
    }
  }

  .col.w-auto {
    width: auto;
  }

  .col.w-content {
    width: fit-content;
  }

  .dates {
    span {
      display: flex;
      flex-direction: row;
      min-width: 110px;
      color: rgb(148, 163, 184);
      flex-wrap: nowrap;
      width: max-content;
    }
  }

  .img {
    padding-top: 24px;
    img {
      width: 140px;
      height: auto;
    }
  }

  h2,
  h3 {
    font-size: 16px;
    font-weight: 400;
  }

  h3 {
    padding-top: 4px;
    color: rgb(100, 116, 139);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 24px;
    margin-left: 16px;
    li {
      color: rgb(148, 163, 184);
      font-size: 16px;
    }
  }

  .job-title-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    a {
      width: 24px;
      height: 24px;
      display: flex;
      margin-top: -2px;
    }
  }

  .skills-container {
    display: flex;
    flex-direction: row;
    gap: 8px;
    flex-wrap: wrap;
    padding-top: 16px;

    .item {
      background-color: rgb(21, 43, 57);
      padding: 8px 16px;
      width: fit-content;
      border-radius: 20px;

      span {
        color: rgb(94, 234, 212);
        font-size: 14px;
      }
    }
  }
`;
