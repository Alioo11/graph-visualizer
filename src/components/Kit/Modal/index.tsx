import MuiDialog, { type DialogProps } from "@mui/material/Dialog";
import type { FC } from "react";

const Modal: FC<DialogProps> = ({ children, ...props }) => {
  return <MuiDialog {...props}>{children}</MuiDialog>;
};

export default Modal;
