import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2000000000; // This is what Google does, so it's okay.
`;

export const OuterDiv = styled.div<{ visible: boolean; hideHeader?: boolean }>`
  width: 160px;
  height: ${({ hideHeader }) => (hideHeader ? "70px" : "100px")};
  position: absolute;
  bottom: 40px;
  left: 7px;
  padding: 8px;
  border-radius: 4px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.06),
    0 3px 8px rgba(0, 0, 0, 0.09);
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: opacity 0.15s;
  animation: ${({ visible }) => visible && "PopoverBounce 0.1s ease-in 1"};
  z-index: 2000000000; // This is what Google does, so it's okay.

  @keyframes PopoverBounce {
    from {
      height: 80px;
    }
    to {
      height: 110px;
    }
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 4px;
  right: 8px;
  font-size: 0.8rem;
  cursor: pointer;
  font-weight: bold;

  fill: lightgrey;
  :hover {
    > svg {
      fill: #969696;
    }
  }
  :active {
    > svg {
      fill: #434343;
    }
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid lightGrey;
`;

export const SelectionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  user-select: none;
`;

export const ReactionElement = styled.span`
  cursor: pointer;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  border: 2px solid transparent;
  transition: border 0.1s;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    font-size: 1.2rem;
    animation: EmojiBounce 0.1s ease-in 1;
  }

  @keyframes EmojiBounce {
    from {
      font-size: 1.2rem;
    }
    to {
      font-size: 1.4rem;
    }
  }
`;
