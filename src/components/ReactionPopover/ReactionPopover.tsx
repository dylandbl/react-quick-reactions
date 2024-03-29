import { useState } from "react";
import {
  OuterDiv,
  CloseButton,
  Header,
  SelectionContainer,
  ReactionElement,
  Overlay,
  PopupPositioningWrapper,
} from "../../styles/ReactionPopoverStyles";
import { RQRProps } from "../../types";
import { CloseSvg } from "../svg/CloseSvg";

export type TransformValuesType = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
};

interface PopoverProps extends RQRProps {
  triggerTransformValues?: TransformValuesType;
}

export const ReactionPopover = (props: PopoverProps) => {
  const {
    animation = "fade",
    isVisible = false,
    onClickReaction,
    closeButton,
    header = "Quick reactions",
    outerDivClassName,
    closeButtonClassName,
    headerClassName,
    selectionContainerClassName,
    reactionElementClassName,
    reactionsArray,
    changeHeaderOnReactionElemHover = true,
    hideHeader,
    hideCloseButton,
    disableClickAwayToClose,
    onClose,
    wide,
    triggerTransformValues,
    placement = "bottom-start",
  } = props;
  const [popoverHeader, setPopoverHeader] = useState(header);

  // Resets the popover header to its default value (props.headerAlt).
  const resetHeader = () => setPopoverHeader(header);

  return (
    <>
      {!disableClickAwayToClose && isVisible && <Overlay onClick={onClose} />}
      <PopupPositioningWrapper
        triggerTransformValues={triggerTransformValues}
        placement={placement}
        hideHeader={hideHeader}
        wide={wide}
        arrayLength={reactionsArray.length}
      >
        <OuterDiv
          className={
            "rqr-outer-div" + (outerDivClassName ? " " + outerDivClassName : "")
          }
          visible={isVisible}
          hideHeader={hideHeader}
          wide={wide}
          arrayLength={reactionsArray.length}
          animation={animation}
        >
          {!hideHeader && (
            <Header
              className={
                "rqr-header" + (headerClassName ? " " + headerClassName : "")
              }
            >
              {popoverHeader}
            </Header>
          )}

          {!hideCloseButton && (
            <CloseButton
              className={
                "rqr-close-button" +
                (closeButtonClassName ? " " + closeButtonClassName : "")
              }
              onClick={onClose}
              wide={wide}
            >
              {closeButton ? closeButton : <CloseSvg />}
            </CloseButton>
          )}
          <SelectionContainer
            className={
              "rqr-selection-container" +
              (selectionContainerClassName
                ? " " + selectionContainerClassName
                : "")
            }
          >
            {reactionsArray?.map((item, index) => (
              <ReactionElement
                className={
                  "rqr-reaction-element" +
                  (reactionElementClassName
                    ? " " + reactionElementClassName
                    : "")
                }
                key={item?.name + "-" + index}
                id={item?.id}
                onClick={() => onClickReaction(item)}
                onMouseEnter={
                  changeHeaderOnReactionElemHover
                    ? () => setPopoverHeader(item?.name)
                    : () => undefined
                }
                onMouseLeave={resetHeader}
              >
                {item?.content}
              </ReactionElement>
            ))}
          </SelectionContainer>
        </OuterDiv>
      </PopupPositioningWrapper>
    </>
  );
};
