import TextField, { type TextFieldProps } from "@mui/material/TextField";
import type { FC } from "react";

const Input: FC<TextFieldProps> = (props) => {
  return <TextField {...props} />;
};

export default Input;
