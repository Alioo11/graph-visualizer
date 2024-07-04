import { useLocation, useNavigate } from "react-router-dom";
import { useTheme, List, ListItem, ListItemButton, Collapse } from "@mui/material";
import { useState, type FC } from "react";
import { sidebarRoutes } from "src/constants/sidebarRoutes";
import ListItemIcon from "src/components/Kit/ListItemIcon";
import ListItemText from "src/components/Kit/ListItemText";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useToggle from "src/hooks/useToggle";
import { sidebarItem } from "src/types/sidebar";

const SidebarItems: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const theme = useTheme();
  const [openMenuId, setOpenMenuId] = useState<Nullable<sidebarItem["route"]>>(null);

  const toggleMenu = (route: sidebarItem["route"]) => {
    if (openMenuId === route) setOpenMenuId(null);
    else setOpenMenuId(route);
  };

  return (
    <List sx={{ padding: 0 }}>
      {sidebarRoutes.map(({ icon, label, route, children, props }, index) => {
        const active = route === pathname;
        const isOpen = route === openMenuId;
        const hasChild = children.length > 0;
        return (
          <>
            <ListItem
              {...props}
              onClick={() => {
                if (hasChild) toggleMenu(route);
                else navigate(route);
              }}
              key={index}
              disablePadding
              selected={active}
              sx={{
                borderRight: active ? "4px solid " + theme.palette.primary.main : undefined,
              }}
            >
              <ListItemButton>
                <ListItemIcon active={active}>{icon}</ListItemIcon>
                <ListItemText primary={label} active={active} />
                {hasChild ? (
                  <KeyboardArrowDownIcon
                    sx={{ transition: "all 500ms", transform: `rotate( ${isOpen ? "0deg" : "180deg"})` }}
                  />
                ) : null}
              </ListItemButton>
            </ListItem>
            <Collapse in={isOpen}>
              {children.map(({ label, route, props }) => {
                const active = route === pathname;
                return (
                  <ListItem
                    {...props}
                    key={route}
                    disablePadding
                    onClick={() => navigate(route)}
                    selected={active}
                    sx={{
                      borderRight: active ? "4px solid " + theme.palette.primary.main : undefined,
                    }}
                  >
                    <ListItemButton>
                      <ListItemText sx={{ ml: "3.5rem" }} primary={label} active={active} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </Collapse>
          </>
        );
      })}
    </List>
  );
};

export default SidebarItems;
