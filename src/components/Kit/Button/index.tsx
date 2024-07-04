import MuiButton, { type ButtonProps } from "@mui/material/Button";
import type { FC } from "react";

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <MuiButton {...props}>{children}</MuiButton>;
};

export default Button;
