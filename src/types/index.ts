type ReactionObj = {
  name: string;
  id?: string;
  content: string | JSX.Element;
};

export interface PopoverProps {
  isVisible: boolean;
  onClickEmoji: (event?: Element) => void;
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
