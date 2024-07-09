import { Box, Collapse, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { HOCFunctionalComponent } from "src/types/components";

interface IDijkstraSidePanelProps {
  open: boolean;
}

const DijkstraSidePanel: HOCFunctionalComponent<IDijkstraSidePanelProps> = (props) => {
  const { children, open } = props;
  return (
    <Collapse orientation="horizontal" in={open}>
      <Stack maxWidth={300} borderLeft={`solid 1px ${grey["300"]}`} p={2} height="80vh" overflow="scroll">
        <Typography variant="h6">Advanced Settings</Typography>
        <Box mt={3}>{children}</Box>
      </Stack>
    </Collapse>
  );
};

export default DijkstraSidePanel;
