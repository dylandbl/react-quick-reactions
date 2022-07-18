import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ConfigContainer = styled.div`
  margin-top: 24px;
  // Same as grid.
  width: 638px;
`;

export const ConfigButton = styled.div`
  cursor: pointer;
  color: #0645ad;
  font-size: 0.9rem;
  :hover {
    text-decoration: underline;
  }
  :active {
    color: #faa700;
  }
`;

export const InputsContainer = styled.div<{ show: boolean }>`
  background: white;
  overflow: hidden;
  margin-bottom: 10px;
  width: 100%;
  ${({ show }) =>
    show
      ? css`
          height: 150px;
        `
      : css`
          height: 0;
        `}
  transition: height 0.15s linear;
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
