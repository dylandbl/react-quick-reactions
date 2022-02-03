type ReactionObj = {
  name: string;
  id?: string;
  content: string | JSX.Element;
  meta?: any;
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
