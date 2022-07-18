import { cloneElement, ReactElement, useRef } from "react";
import { ReactionPopover } from "./components/ReactionPopover/ReactionPopover";
import { QuickReactionsSpan } from "./styles/RqrStyles";
import { RQRProps } from "./types";

interface QuickReactionsProps extends RQRProps {
  trigger: ReactElement;
}
const QuickReactions = (props: QuickReactionsProps) => {
  const { trigger, isVisible } = props;
  const triggerRef = useRef<HTMLElement>(null);
  const clonedTrigger = cloneElement(trigger, { ref: triggerRef });
  const triggerPosition = triggerRef.current?.getBoundingClientRect();

  return (
    <QuickReactionsSpan>
      {clonedTrigger}
      {isVisible && (
        <ReactionPopover triggerTransformValues={triggerPosition} {...props} />
      )}
    </QuickReactionsSpan>
  );
};

export default QuickReactions;
