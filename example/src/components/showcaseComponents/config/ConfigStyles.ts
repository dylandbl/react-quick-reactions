import styled from "@emotion/styled";

export const ConfigContainer = styled.div`
  // Same as grid.
  width: 638px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 12px;
  grid-template-areas:
    "config  button"
    "codeblock  codeblock";

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
