import { useMemo, useState } from "react";

type ReactionObj = {
  name: string;
  id?: string;
  content: string | JSX.Element;
};

export interface PopoverProps {
  isVisible: boolean;
  onClick: (event?: Element) => void;
  closeButtonAlt?: string | JSX.Element;
  headerAlt?: string;
  outerDivClass?: string;
  closeButtonClass?: string;
  headerClass?: string;
  selectionContainerClass?: string;
  reactionElementClass?: string;
  reactionsArray: ReactionObj[];
  changeHeaderOnReactionElemHover?: boolean;
  hideHeader?: boolean;
  hideCloseButton?: boolean;
}

const ReactionPopover = (props: PopoverProps) => {
  const {
    isVisible = false,
    onClick,
    closeButtonAlt = null,
    headerAlt = "Quick reactions",
    outerDivClass,
    closeButtonClass,
    headerClass,
    selectionContainerClass,
    reactionElementClass,
    reactionsArray,
    changeHeaderOnReactionElemHover = true,
    hideHeader,
    hideCloseButton,
  } = props;
  const [, setIsPopoverVisible] = useState(isVisible);
  const [popoverHeader, setPopoverHeader] = useState(headerAlt);

  // Resets the popover header to its default value (props.headerAlt).
  const resetHeader = useMemo(() => {
    setPopoverHeader(headerAlt);
  }, [headerAlt]);

  return (
    <div className={"rqr-outer-div " + outerDivClass}>
      {!hideCloseButton && (
        <span
          className={"rqr-close-button " + closeButtonClass}
          onClick={() => setIsPopoverVisible(false)}>
          {closeButtonAlt ? closeButtonAlt : "X"}
        </span>
      )}
      {!hideHeader && <div className={"rqr-header " + headerClass}>{popoverHeader}</div>}
      <div className={"rqr-selection-container " + selectionContainerClass}>
        {reactionsArray?.map((item, index) => (
          <span
            className={"rqr-reaction-element " + reactionElementClass}
            key={item?.name + "-" + index}
            id={item?.id}
            onClick={(e) => onClick(e.target as Element)}
            onMouseEnter={
              changeHeaderOnReactionElemHover
                ? () => setPopoverHeader(item?.name)
                : () => undefined
            }
            onMouseLeave={() => resetHeader}>
            {item?.content}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ReactionPopover;
