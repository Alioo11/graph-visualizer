import { Box, Button, Divider, IconButton, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useToggle from "src/hooks/useToggle";
import DijkstraSidePanel from "./SidePanel";
import { grey } from "@mui/material/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Stage, Visualization } from "graph-visualizer-core";
import "graph-visualizer-core/dist/main.css";
import { wait } from "@testing-library/user-event/dist/utils";
import {
  DEFAULT_BOARD_HEIGHT,
  DEFAULT_BOARD_WIDTH,
  DEFAULT_ENTRY_POINT,
  DEFAULT_TARGET_POINT,
} from "src/constants/dijkstra";

const DijkstraPathFindingPage = () => {
  const drawerContainerRef = useRef(null);

  const [boardWidth, setBoardWidth] = useState(DEFAULT_BOARD_WIDTH);
  const [boardHeight, setBoardHeight] = useState(DEFAULT_BOARD_HEIGHT);

  const [entryPointX, setEntryPointX] = useState(DEFAULT_ENTRY_POINT[0]);
  const [entryPointY, setEntryPointY] = useState(DEFAULT_ENTRY_POINT[1]);

  const [targetPointX, setTargetPointX] = useState(DEFAULT_TARGET_POINT[0][0]);
  const [targetPointY, setTargetPointY] = useState(DEFAULT_TARGET_POINT[0][1]);

  const visualizationDocutmentReference = useRef(null);

  const visualization = useRef<Nullable<Stage>>(null);
  const isAlgorithmRunning = useRef(false);

  const runAlgorithmIteratively = async () => {
    if (!visualization.current || !visualization.current.visualization) return;
    let thereIsMoreSteps = true;
    while (thereIsMoreSteps && isAlgorithmRunning.current) {
      await wait(1);
      thereIsMoreSteps = visualization.current.visualization.algorithm.iter();
    }
  };

  const handleStart = () => {
    isAlgorithmRunning.current = true;
    runAlgorithmIteratively();
  };

  const handlePause = () => {
    isAlgorithmRunning.current = false;
  };

  const handleStep = () => {
    if (visualization.current && visualization.current.visualization) {
      visualization.current.visualization.algorithm.iter();
    }
  };

  useEffect(() => {
    if (visualizationDocutmentReference && visualizationDocutmentReference.current) {
      const stage = new Stage(visualizationDocutmentReference.current);
      const vis = new Visualization({
        width: boardWidth,
        height: boardHeight,
        entry: [entryPointX, entryPointY],
        targetPoints: [[targetPointX, targetPointY]],
      });
      stage.visualization = vis;
      visualization.current = stage;
    }
  }, [visualizationDocutmentReference]);

  const [isOpenAdvancedSettings, toggleOpenAdvancedSettings] = useToggle(true);

  const reInitProgram = () => {
    isAlgorithmRunning.current = false;
    if (visualizationDocutmentReference && visualizationDocutmentReference.current) {
      const stage = new Stage(visualizationDocutmentReference.current);
      const vis = new Visualization({
        width: boardWidth,
        height: boardHeight,
        entry: [entryPointX, entryPointY],
        targetPoints: [[targetPointX, targetPointY]],
      });
      stage.visualization = vis;
      visualization.current = stage;
    }
  };

  return (
    <Stack width="100%" height="80vh" ref={drawerContainerRef} direction="row-reverse">
      <DijkstraSidePanel open={isOpenAdvancedSettings}>
        <Typography variant="body1">Board</Typography>
        <Divider />

        <Stack direction="row" gap={3} my={2}>
          <TextField value={boardWidth} onChange={(e) => setBoardWidth(Number(e.target.value))} type="number" label="Width" />
          <TextField value={boardHeight} onChange={(e) => setBoardHeight(Number(e.target.value))} type="number" label="Height" />
        </Stack>

        <Typography variant="body1">Entry Point Coordinate</Typography>
        <Divider />
        <Stack direction="row" gap={3} my={2}>
          <TextField value={entryPointX} onChange={(e) => setEntryPointX(Number(e.target.value))} type="number" label="x" />
          <TextField value={entryPointY} onChange={(e) => setEntryPointY(Number(e.target.value))} type="number" label="y" />
        </Stack>

        <Typography variant="body1">Target Point Coordinate</Typography>
        <Divider />
        <Stack direction="row" gap={3} my={2}>
          <TextField value={targetPointX} onChange={(e) => setTargetPointX(Number(e.target.value))} type="number" label="x" />
          <TextField value={targetPointY} onChange={(e) => setTargetPointY(Number(e.target.value))} type="number" label="y" />
        </Stack>

        <Button onClick={reInitProgram} fullWidth variant="contained">
          Apply
        </Button>
      </DijkstraSidePanel>
      <Stack flex={1} direction="row">
        <Box width="100%">
          <Box
            width="98%"
            bgcolor={grey["100"]}
            height="fit-content"
            borderRadius={1}
            p={4}
            flexDirection="row"
            display="flex"
          >
            <Stack gap={3} direction="row">
              <Button onClick={handleStart} variant="contained">
                start
              </Button>
              <Button  onClick={handlePause} variant="contained">
                pause
              </Button>
              <Button onClick={handleStep} variant="contained">
                step
              </Button>
              <Button  onClick={reInitProgram} variant="contained">
                reset
              </Button>
            </Stack>
            <IconButton onClick={toggleOpenAdvancedSettings} sx={{ ml: "auto" }}>
              <ArrowForwardIosIcon
                sx={{ transition: "all 500ms", transform: `rotate( ${isOpenAdvancedSettings ? "0deg" : "180deg"})` }}
              />
            </IconButton>
          </Box>
          <Box mt={2} ref={visualizationDocutmentReference} height="40px" width="98%" bgcolor="grey"></Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default DijkstraPathFindingPage;
