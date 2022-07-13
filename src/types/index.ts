type ReactionObj = {
  id?: string;
  name: string;
  content: string | JSX.Element;
};

export interface PopoverProps {
  changeHeaderOnReactionElemHover?: boolean;
  closeButtonAlt?: string | JSX.Element;
  closeButtonClassName?: string;
  disableClickAwayToClose?: boolean;
  headerAlt?: string;
  headerClassName?: string;
  hideCloseButton?: boolean;
  hideHeader?: boolean;
  isVisible: boolean;
  onClickEmoji: (event?: Element) => void;
  outerDivClassName?: string;
  reactionElementClassName?: string;
  reactionsArray: ReactionObj[];
  selectionContainerClassName?: string;
  setIsVisible?: (value: boolean) => void;
  wide?: boolean;
  position?: "top" | "right" | "bottom" | "left";
}
