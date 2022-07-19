import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { TransformValuesType } from "../components/ReactionPopover/ReactionPopover";
import { AnimationType, PlacementType } from "../types";
import { calculatePopupTranslate, calcWidth, calcHeight } from "./styleUtils";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2000000000; // This is what Google does, so it's okay.
`;

// Separating the placement calculation from the rest of OuterDiv allows me to use transform for animations.
export const PopupPositioningWrapper = styled.div<{
  hideHeader?: boolean;
  wide?: boolean;
  arrayLength: number;
  triggerTransformValues?: TransformValuesType;
  placement: PlacementType;
}>`
  ${({ triggerTransformValues, placement, arrayLength, hideHeader, wide }) =>
    triggerTransformValues &&
    css`
      transform: translate(
        ${calculatePopupTranslate(
          triggerTransformValues,
          // This solution assumes the height and width are calculated based on the standards I defined,
          // not on actual height/width, which could be changed by the user.
          wide ? calcWidth(arrayLength) : 150,
          calcHeight(arrayLength, hideHeader, wide),
          placement
        )}
      );
    `}
`;

export const OuterDiv = styled.div<{
  visible: boolean;
  hideHeader?: boolean;
  wide?: boolean;
  arrayLength: number;
  animation: AnimationType;
}>`
  width: ${({ wide, arrayLength = 8 }) =>
    wide ? calcWidth(arrayLength) + "px" : "150px"};
  height: ${({ hideHeader, wide, arrayLength }) =>
    calcHeight(arrayLength, hideHeader, wide)}px;
  position: fixed;
  z-index: 2000000000; // This is what Google does, so it's okay.

  border-radius: 4px;
  border: 1px solid #c6d6eb;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.06),
    0 3px 8px rgba(0, 0, 0, 0.09);

  overflow: hidden;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: opacity 0.15s;

  animation: ${({ visible, animation }) =>
    visible && `${animation} 0.1s ease-in 1`};

  @keyframes drop {
    from {
      height: ${({ hideHeader, wide, arrayLength }) =>
        calcHeight(arrayLength, hideHeader, wide) - 20}px;
    }
    to {
      height: ${({ hideHeader, wide, arrayLength }) =>
        calcHeight(arrayLength, hideHeader, wide) + 10}px;
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes flip {
    0% {
      perspective: 500px;
      transform: rotateX(70deg);
    }
    100% {
      perspective: 500px;
      transform: rotateX(-35deg);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0, 0);
    }
    to {
      transform: scale(1, 1);
    }
  }
`;

export const CloseButton = styled.span<{ wide?: boolean }>`
  position: absolute;
  top: 4px;
  right: ${({ wide }) => (wide ? 4 : 8)}px;
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
  width: calc(100% - 16px);
  left: 8px;
  position: relative;
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
