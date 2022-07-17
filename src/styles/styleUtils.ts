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
    else return 68;
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
  // x is relative to the view, y is relative to the trigger element.
  let x = 0;
  let y = 0;
  const margin = 10;

  if (placement === "top-start") {
    x = triggerTransformValues.left;
    y = triggerTransformValues.height * -1 - popupHeight - margin;
  }
  if (placement === "top") {
    x =
      triggerTransformValues.left +
      (triggerTransformValues.width - popupWidth) / 2;
    y = triggerTransformValues.height * -1 - popupHeight - margin;
  }
  if (placement === "top-end") {
    x = triggerTransformValues.x + (triggerTransformValues.width - popupWidth);
    y = triggerTransformValues.height * -1 - popupHeight - margin;
  }
  if (placement === "left-start") {
    x = triggerTransformValues.x - popupWidth - margin;
    y = triggerTransformValues.height * -1;
  }
  if (placement === "left") {
    x = triggerTransformValues.x - popupWidth - margin;
    y = (popupHeight / 2 + triggerTransformValues.height / 2) * -1;
  }
  if (placement === "left-end") {
    x = triggerTransformValues.x - popupWidth - margin;
    y = popupHeight * -1;
  }

  if (placement === "right-start") {
    x = triggerTransformValues.left + triggerTransformValues.width + margin;
    y = triggerTransformValues.height * -1;
  }
  if (placement === "right") {
    x = triggerTransformValues.left + triggerTransformValues.width + margin;
    y = (popupHeight / 2 + triggerTransformValues.height / 2) * -1;
  }
  if (placement === "right-end") {
    x = triggerTransformValues.left + triggerTransformValues.width + margin;
    y = popupHeight * -1;
  }

  if (placement === "bottom-start") {
    x = triggerTransformValues.left;
    y = margin;
  }
  if (placement === "bottom") {
    x =
      triggerTransformValues.left +
      (triggerTransformValues.width - popupWidth) / 2;
    y = margin;
  }
  if (placement === "bottom-end") {
    x = triggerTransformValues.x + (triggerTransformValues.width - popupWidth);
    y = margin;
  }

  return `${x}px, ${y}px`;
};
