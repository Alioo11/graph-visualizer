import MuiSelect from "@mui/material/Select";
import MuiMenuItem from "@mui/material/MenuItem";
import type { FC } from "react";
import type { SelectProps } from "./props";

const Select: FC<SelectProps> = ({ items, ...props }) => {
  return (
    <MuiSelect {...props}>
      {items.map(({ component, ...props }) => (
        <MuiMenuItem {...props}>{component}</MuiMenuItem>
      ))}
    </MuiSelect>
  );
};

export default Select;
