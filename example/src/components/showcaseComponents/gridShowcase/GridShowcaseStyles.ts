import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Grid = styled.div`
  margin-top: 150px;
  // Width = five items + four gaps + padding + border
  width: calc(116px * 5 + 8px * 4 + 26px);
  padding: 12px;

  border: 1px solid grey;

  display: grid;
  grid-template-columns: 116px 116px 116px 116px 116px;
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
  top: -177px;
  width: 297px;
  height: 122px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 5rem;
`;
