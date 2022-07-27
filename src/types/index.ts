export type ReactionObj = {
  id?: string;
  name: string;
  content: string | JSX.Element;
  [key: string]: any;
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

export type AnimationType = "drop" | "fade" | "flip" | "zoom" | "none";

export interface RQRProps {
  animation?: AnimationType;
  changeHeaderOnReactionElemHover?: boolean;
  closeButton?: string | JSX.Element;
  closeButtonClassName?: string;
  disableClickAwayToClose?: boolean;
  header?: string;
  headerClassName?: string;
  hideCloseButton?: boolean;
  hideHeader?: boolean;
  isVisible: boolean;
  onClickReaction: (reaction: ReactionObj) => void;
  onClose: () => void;
  outerDivClassName?: string;
  placement?: PlacementType;
  reactionElementClassName?: string;
  reactionsArray: ReactionObj[];
  selectionContainerClassName?: string;
  wide?: boolean;
}
