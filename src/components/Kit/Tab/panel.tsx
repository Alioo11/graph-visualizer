import Box from "@mui/material/Box";
import type { FC } from "react";
import type { TabPanelProps } from "./props";
const TabPanel: FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
