import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import SidebarItems from "./Items";
import type { FC } from "react";
import { SidebarProps } from "./props";
import { sidebarWidth } from "src/constants/layout";
import { ListItemText } from "@mui/material";

const Sidebar: FC<SidebarProps> = (props) => {
  const { open } = props;
  return (
    <Drawer open={open} variant="persistent">
      <Box width={sidebarWidth} flex="1">
        <Box p={4} fontSize={20} bgcolor="primary.main" color="white">
          <ListItemText primary="Graph Visualizer" />
        </Box>
        <SidebarItems />
      </Box>
    </Drawer>
  );
};
export default Sidebar;
