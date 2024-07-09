import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const DashboardPage = () => {
  return (
    <Box mx={4}>
      <Typography variant="h4">Graph Visualizer</Typography>
      <Typography mt={2} variant="body1">
        Overview
      </Typography>
      <Typography variant="body2">
        The Graph Visualizer is an advanced tool engineered to effectively display graph data structures. It offers a
        versatile API, enabling developers to depict graphs in numerous styles and setups, simplifying the comprehension
        and analysis of intricate network systems. This tool is specifically crafted to illustrate the functioning of
        graph algorithms, aiding both students and professionals in grasping the inner workings of these algorithms.
      </Typography>
    </Box>
  );
};

export default DashboardPage;
