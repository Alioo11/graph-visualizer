import type { TabsProps as MiTabsProps } from "@mui/material/Tabs";
import type { TabProps } from "@mui/material";

export interface TabsProps extends MiTabsProps{
    items:TabProps[]
}

export type TabPanelProps = {
  children?: React.ReactNode;
  index:number;
  value: number;
};