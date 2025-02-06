"use client";
import styled from "styled-components";

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 24px;

  .item-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
  .line {
    background: rgb(148, 163, 184);
    width: 40px;
    height: 1px;
    border-radius: 16px;
  }
  .text {
    color: rgb(148, 163, 184);
    text-transform: uppercase;
  }
`;
