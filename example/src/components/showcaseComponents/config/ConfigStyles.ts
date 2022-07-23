import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ConfigContainer = styled.div<{ isMobile: boolean }>`
  display: grid;
  grid-row-gap: 12px;

  ${({ isMobile }) =>
    isMobile
      ? css`
          grid-template-areas:
            "button"
            "config"
            "codeblock";
          width: 100%;
          padding: 0 6px;
        `
      : css`
          width: 600px;
          grid-template-columns: repeat(2, 1fr);
          grid-template-areas:
            "config button"
            "codeblock codeblock";
        `}

  // Inputs container
  div:first-of-type {
    grid-area: config;
  }
  // Button
  span:first-of-type {
    grid-area: button;
    place-self: center;
  }
  // Codeblock
  div:nth-of-type(2) {
    grid-area: codeblock;
  }
`;

export const InputsContainer = styled.div`
  background: white;

  label {
    margin-left: 4px;
    &.textInputLabel {
      margin: 6px 0 0 0;
      display: inline-block;
    }
  }

  .dropdownLabel {
    margin-left: 0;
  }
  select {
    width: 177px;
  }
  .num-input {
    width: 44px;
  }
  p {
    margin: 0 0 6px;
    .fancy-a {
      text-decoration: none;
      color: #0645ad;
      :hover {
        text-decoration: underline;
      }
      :active {
        color: #faa700;
      }
    }
  }
`;
