type ReactionObj = {
  id?: string;
  name: string;
  content: string | JSX.Element;
};

export interface PopoverProps {
  changeHeaderOnReactionElemHover?: boolean;
  closeButton?: string | JSX.Element;
  closeButtonClassName?: string;
  disableClickAwayToClose?: boolean;
  header?: string;
  headerClassName?: string;
  hideCloseButton?: boolean;
  hideHeader?: boolean;
  isVisible: boolean;
  onClickReaction: (event?: Element) => void;
  onClose: () => void;
  outerDivClassName?: string;
  reactionElementClassName?: string;
  reactionsArray: ReactionObj[];
  selectionContainerClassName?: string;
  wide?: boolean;
}
