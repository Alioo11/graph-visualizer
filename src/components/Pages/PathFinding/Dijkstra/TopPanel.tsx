import { Box, Button, IconButton, Stack } from "@mui/material";
import { FC } from "react";

interface DijkstraTopPanelProps {
  onClickStart: () => void;
  onClickPause: () => void;
  onClickStep: () => void;
}

const DijkstraTopPanel: FC<DijkstraTopPanelProps> = (props) => {
  const { onClickPause, onClickStart, onClickStep } = props;
  return (
    <Box width="100%" bgcolor="white" height="fit-content" borderRadius={1} p={4} flexDirection="row" display="flex">
      <Stack gap={3} direction="row">
        <Button size="small" onClick={onClickStart} variant="contained">
          start
        </Button>
        <Button size="small" onClick={onClickPause} variant="contained">
          pause
        </Button>
        <Button size="small" onClick={onClickStep} variant="contained">
          step
        </Button>
      </Stack>
    </Box>
  );
};

export default DijkstraTopPanel;
