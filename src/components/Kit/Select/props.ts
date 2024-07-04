import type { SelectProps as MuiSelectProps } from "@mui/material/Select";
import type { MenuItemProps } from "@mui/material/MenuItem";
//@ts-ignore
export interface SelectProps extends MuiSelectProps {
  items: Array<
    {
      component: React.ReactNode;
    } & MenuItemProps
  >;
}
