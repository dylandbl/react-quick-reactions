type ReactionObj = {
  id?: string;
  name: string;
  content: string | JSX.Element;
};

export type PlacementType =
  | "top-start"
  | "top"
  | "top-end"
  | "left-start"
  | "left"
  | "left-end"
  | "right-start"
  | "right"
  | "right-end"
  | "bottom-start"
  | "bottom"
  | "bottom-end";

export interface RQRProps {
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
  placement?: PlacementType;
  reactionElementClassName?: string;
  reactionsArray: ReactionObj[];
  selectionContainerClassName?: string;
  wide?: boolean;
}
