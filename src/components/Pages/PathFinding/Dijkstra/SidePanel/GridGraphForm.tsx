import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { IGridGraphForm } from "src/types/grid";
import AddIcon from "@mui/icons-material/Add";

const DEFAULT_WIDTH = 10;
const DEFAULT_HEIGHT = 10;

const DEFAULT_STARTING_POINT: [number, number] = [0, 3];

const DEFAULT_TARGET_POINT: IGridGraphForm["targetList"] = [[2, 2]];

interface DijkstraSidePanelGridGraphFormType {
  onCreate: (data: IGridGraphForm) => void;
}

const DijkstraSidePanelGridGraphForm: FC<DijkstraSidePanelGridGraphFormType> = (props) => {
  const { onCreate } = props;

  const [width, setWidth] = useState<number>(DEFAULT_WIDTH);
  const [height, setHeight] = useState<number>(DEFAULT_HEIGHT);

  const [startingPoint, setStartingPoint] = useState<IGridGraphForm["entryPoint"]>(DEFAULT_STARTING_POINT);

  const [targetPoints, setTargetPoints] = useState<IGridGraphForm["targetList"]>(DEFAULT_TARGET_POINT);

  const handleAddTargetPoint = () => {
    setTargetPoints([...targetPoints, [0, 0]]);
  };

  const handleCreate = () => {
    const creationObject: IGridGraphForm = {
      width: width,
      height: height,
      entryPoint: startingPoint,
      targetList: targetPoints,
      gap: 10,
    };

    onCreate(creationObject);
  };

  return (
    <Stack>
      <Box my={2}>
        <Typography textAlign="left" variant="caption">
          Graph Size
        </Typography>
        <Stack direction="row" gap={2} mt={2}>
          <TextField
            value={width}
            onChange={(e) => setWidth(parseInt(e.target.value))}
            type="number"
            size="small"
            label="height"
          />
          <TextField
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
            type="number"
            size="small"
            label="height"
          />
        </Stack>
      </Box>
      <Box my={2}>
        <Typography textAlign="left" variant="caption">
          Starting Point
        </Typography>
        <Stack direction="row" gap={2} mt={2}>
          <TextField
            value={startingPoint[0]}
            onChange={(e) => setStartingPoint([parseInt(e.target.value), startingPoint[1]])}
            type="number"
            size="small"
            label="x"
          />
          <TextField
            value={startingPoint[1]}
            onChange={(e) => setStartingPoint([startingPoint[0], parseInt(e.target.value)])}
            type="number"
            size="small"
            label="y"
          />
        </Stack>
      </Box>

      <Box my={2} maxHeight={150} sx={{overflowY:"scroll"}}>
        <Typography textAlign="left" variant="caption">
          Target Points
        </Typography>

        {targetPoints.map((tPoint, index) => {
          return (
            <Stack direction="row" gap={2} mt={2}>
              <TextField
                value={tPoint[0]}
                onChange={(e) =>
                  setTargetPoints(
                    targetPoints.map((val, i) => (i === index ? [parseInt(e.target.value), tPoint[1]] : val))
                  )
                }
                type="number"
                size="small"
                label="x"
              />
              <TextField
                value={tPoint[1]}
                onChange={(e) =>
                  setTargetPoints(
                    targetPoints.map((val, i) => (i === index ? [tPoint[0], parseInt(e.target.value)] : val))
                  )
                }
                type="number"
                size="small"
                label="y"
              />
            </Stack>
          );
        })}
      </Box>
      <Box mt={2}>
        <Button onClick={handleAddTargetPoint} startIcon={<AddIcon />} size="small">
          Add
        </Button>
      </Box>
      <Button onClick={handleCreate} variant="contained">
        create
      </Button>
    </Stack>
  );
};

export default DijkstraSidePanelGridGraphForm;
