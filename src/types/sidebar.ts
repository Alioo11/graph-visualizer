import type { ListItemProps } from "@mui/material";

export interface sidebarItem {
  route: string;
  icon: JSX.Element;
  label: string;
  props?: ListItemProps;
  children: Array<sidebarChild>;
}

interface sidebarChild {
  props?: ListItemProps;
  route: string;
  label: string;
}
