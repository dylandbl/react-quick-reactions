import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Grid = styled.div<{ isMobile?: boolean }>`
  ${({ isMobile }) =>
    !isMobile &&
    css`
      padding: 12px;
      border: 1px solid grey;
    `}

  display: grid;
  grid-template-columns: ${({ isMobile }) =>
    isMobile ? "116px 116px 116px" : "116px 116px 116px 116px 116px"};
  grid-gap: 8px;
`;

export const GridItem = styled.div<{ hasTitle?: boolean }>`
  text-align: center;
  ${({ hasTitle }) =>
    hasTitle &&
    css`
      padding: 6px;
      border: 1px solid lightgrey;
      cursor: pointer;
      border-radius: 4px;
      user-select: none;
      background: #ffc83d;
    `}
`;

export const EmojiDisplay = styled.div`
  position: relative;
  top: -170px;
  width: 297px;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 5rem;
`;
