import styled from "@emotion/styled";

export const CodeblockContainer = styled.div``;

export const Pre = styled.pre<{ show: boolean }>`
  background: #e7e7e7;
  border-radius: 4px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  height: 100%;
  position: relative;
  margin: 0;

  width: 100%;
  padding: 4px 12px 8px;
  overflow-x: hidden;

  .copyIcon {
    position: absolute;
    right: 10px;
    top: 8px;
    :active {
      fill: #bf2abf;
    }
  }
`;

export const CopiedNotice = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  position: relative;
  width: 0;
  opacity: 0;
  float: right;
  right: 42px;

  &.animateCopied {
    animation: copiedAnimation 1s;
  }
  @keyframes copiedAnimation {
    from {
      top: -22px;
      opacity: 1;
    }
    to {
      top: -60px;
      opacity: 0;
    }
  }
`;
