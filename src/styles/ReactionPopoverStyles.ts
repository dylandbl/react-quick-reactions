import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2000000000; // This is what Google does, so it's okay.
`;

const calcHeight = (hideHeader?: boolean, wide?: boolean) => {
  if (hideHeader) {
    if (wide) return 35;
    else return 68;
  } else {
    if (wide) return 54;
    // Default height.
    else return 90;
  }
};

export const OuterDiv = styled.div<{
  visible: boolean;
  hideHeader?: boolean;
  wide?: boolean;
}>`
  width: ${({ wide }) => (wide ? "275px" : "136px")};
  height: ${({ hideHeader, wide }) => calcHeight(hideHeader, wide)}px;
  overflow: hidden;
  position: absolute;
  padding: 8px;
  border-radius: 4px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.06),
    0 3px 8px rgba(0, 0, 0, 0.09);
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: opacity 0.15s;
  z-index: 2000000000; // This is what Google does, so it's okay.
  animation: ${({ visible }) => visible && "PopoverBounce 0.1s ease-in 1"};

  @keyframes PopoverBounce {
    from {
      height: ${({ hideHeader, wide }) => calcHeight(hideHeader, wide) - 20}px;
    }
    to {
      height: ${({ hideHeader, wide }) => calcHeight(hideHeader, wide) + 10}px;
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
