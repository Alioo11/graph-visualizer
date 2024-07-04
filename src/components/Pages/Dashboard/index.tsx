import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const DashboardPage = () => {
  return (
    <Box mx={4}>
      <Typography variant="h4">About Graph Visualizer</Typography>
      <Typography mt={2} variant="body1">
        Overview
      </Typography>
      <Typography variant="body2">
        The Graph Visualizer is a web application designed to provide users with interactive visualizations
        and analytics related to graph algorithms. This project utilizes modern web technologies and libraries to offer a
        user-friendly interface for exploring and understanding complex algorithms.
      </Typography>

      <Typography mt={2} variant="body1">
        Features
      </Typography>
      <Typography variant="body2">
        A central hub for accessing various visualization tools and analytics features. Custom Select Component: An
        enhanced select input component that supports dynamic content rendering.
      </Typography>
    </Box>
  );
};

export default DashboardPage;
