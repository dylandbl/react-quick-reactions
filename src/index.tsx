import { ReactNode } from "react";
import { ReactionPopover } from "./components/ReactionPopover/ReactionPopover";
import { PopoverProps } from "./types";

interface RQRProps extends PopoverProps {
  trigger: ReactNode;
}
const RQR = (props: RQRProps) => {
  const { trigger } = props;

  return (
    <>
      {trigger}
      <ReactionPopover {...props} />
    </>
  );
};

export default RQR;
