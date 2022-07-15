import { ReactNode } from "react";
import { ReactionPopover } from "./components/ReactionPopover/ReactionPopover";
import { QuickReactionsSpan } from "./styles/RqrStyles";
import { PopoverProps } from "./types";

interface QuickReactionsProps extends PopoverProps {
  trigger: ReactNode;
}
const QuickReactions = (props: QuickReactionsProps) => {
  const { trigger, isVisible } = props;

  return (
    <QuickReactionsSpan>
      {trigger}
      {isVisible && <ReactionPopover {...props} />}
    </QuickReactionsSpan>
  );
};

export default QuickReactions;
