import Box from "@mui/material/Box";
import { Tabs as MuiTabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabPanel from "./panel";
import type { FC } from "react";
import type { TabsProps } from "./props";

const Tabs: FC<TabsProps> = ({ items, ...props }) => {
  const { onChange, value, children } = props;
  return (
    <Box width="100%">
      <MuiTabs value={props.value} onChange={onChange}>
        {items.map((item) => (
          <Tab label={item.label} />
        ))}
      </MuiTabs>
      {items.map((item, index) => (
        <TabPanel value={value} index={index} children={children} />
      ))}
    </Box>
  );
};
