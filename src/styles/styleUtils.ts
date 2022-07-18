import { TransformValuesType } from "../components/ReactionPopover/ReactionPopover";
import { PlacementType } from "../types";

// Calculate width of `wide` popup.
export const calcWidth = (arrayLength: number) => {
  if (arrayLength > 8) arrayLength = 8;
  if (arrayLength === 0) arrayLength = 1;
  // (34px per item) + 17px
  return 34 * arrayLength + 17;
};

// Calculates height according to `wide`, `header`, and reactionArray.length.
export const calcHeight = (
  arrayLength: number,
  hideHeader?: boolean,
  wide?: boolean
) => {
  if (hideHeader) {
    if (wide || arrayLength < 5) return 35;
    else return 64;
  } else {
    if (wide || arrayLength < 5) return 54;
    // Default popup height is 90.
    else return 90;
  }
};

export const calculatePopupTranslate = (
  triggerTransformValues: TransformValuesType,
  popupWidth: number,
  popupHeight: number,
  placement: PlacementType
) => {
  let x = 0;
  let y = 0;
  const margin = 10;

  if (placement === "top-start") {
    y = triggerTransformValues.height * -1 - popupHeight - margin;
  }
  if (placement === "top") {
    x = (triggerTransformValues.width - popupWidth) / 2;
    y = triggerTransformValues.height * -1 - popupHeight - margin;
  }
  if (placement === "top-end") {
    x = triggerTransformValues.width - popupWidth;
    y = triggerTransformValues.height * -1 - popupHeight - margin;
  }

  if (placement === "left-start") {
    x -= popupWidth + margin;
    y = triggerTransformValues.height * -1;
  }
  if (placement === "left") {
    x -= popupWidth + margin;
    y = (popupHeight / 2 + triggerTransformValues.height / 2) * -1;
  }
  if (placement === "left-end") {
    x -= popupWidth + margin;
    y = popupHeight * -1;
  }

  if (placement === "right-start") {
    x = triggerTransformValues.width + margin;
    y = triggerTransformValues.height * -1;
  }
  if (placement === "right") {
    x = triggerTransformValues.width + margin;
    y = (popupHeight / 2 + triggerTransformValues.height / 2) * -1;
  }
  if (placement === "right-end") {
    x = triggerTransformValues.width + margin;
    y = popupHeight * -1;
  }

  if (placement === "bottom-start") {
    y = margin;
  }
  if (placement === "bottom") {
    x = (triggerTransformValues.width - popupWidth) / 2;
    y = margin;
  }
  if (placement === "bottom-end") {
    x = triggerTransformValues.width - popupWidth;
    y = margin;
  }

  return `${x}px, ${y}px`;
};
