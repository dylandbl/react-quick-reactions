import styled from "@emotion/styled";

export const Body = styled.div<{ isMobile?: boolean }>`
  // Make space for the header.
  margin-top: ${({ isMobile }) => (isMobile ? 82 : 68)}px;
  // 100vh - header - footer
  min-height: calc(100vh - 68px - 26px);

  padding: 0 0 16px 0;
`;
