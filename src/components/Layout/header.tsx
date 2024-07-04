import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";

interface HeaderProps {
  toggleSidebar: NoneToVoidFunction;
}

const Header: FC<HeaderProps> = (props) => {
  const { toggleSidebar } = props;

  return (
    <>
      <Box width="100%" sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              onClick={toggleSidebar}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
