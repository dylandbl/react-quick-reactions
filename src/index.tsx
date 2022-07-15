import { ReactNode } from "react";
import { ReactionPopover } from "./components/ReactionPopover/ReactionPopover";
import { RQRSpan } from "./styles/RqrStyles";
import { PopoverProps } from "./types";

interface RQRProps extends PopoverProps {
  trigger: ReactNode;
}
const RQR = (props: RQRProps) => {
  const { trigger } = props;

  return (
    <RQRSpan>
      {trigger}
      <ReactionPopover {...props} />
    </RQRSpan>
  );
};

export default RQR;
