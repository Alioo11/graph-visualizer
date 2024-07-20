import { Box, Container } from "@mui/material";
import Header from "./header";
import Sidebar from "./Sidebar";
import { HOCFunctionalComponent } from "src/types/components";
import useToggle from "src/hooks/useToggle";
import { sidebarWidth } from "src/constants/layout";
import LayoutBreadcrumb from "./Breadcrumb";
import { grey } from "@mui/material/colors";

const Layout: HOCFunctionalComponent = ({ children }): JSX.Element => {
  const [isSidebarOpen, toggleSidebar] = useToggle(true);
  return (
    <Box display="flex" flexDirection="row" height="100%">
      <Sidebar open={isSidebarOpen} />
      <Box
        width="100%"
        sx={{ transition: "margin 215ms" }}
        ml={`${isSidebarOpen ? sidebarWidth : 0}px`}
        display="flex"
        flexDirection="column"
        bgcolor={grey["100"]}
      >
        <Header toggleSidebar={toggleSidebar} />
        <LayoutBreadcrumb />
        <Container maxWidth={false} sx={{ p: "1rem", pt: 0, maxWidth: "1650px" }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};
export default Layout;
