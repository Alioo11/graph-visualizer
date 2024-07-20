import { Box, Button, Checkbox, Divider, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { FC, useMemo, useState } from "react";
import { Switch, Case } from "react-if";
import DijkstraSidePanelGridGraphForm from "./GridGraphForm";
import DijkstraSidePanelRandomizedGraphForm from "./RandomizedGraphForm";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";
import StraightenIcon from "@mui/icons-material/Straighten";
import { IGridGraphForm, IRandomizedGraphForm } from "src/types/grid";
import { VISUALIZATION_SPEED } from "src/constants/dijkstra";
import { Label } from "@mui/icons-material";

type graphType = "grid" | "randomized";

interface IGraphForm {
  id: number;
  title: graphType;
}

const graphTypes: Array<IGraphForm> = [
  {
    id: 1,
    title: "grid",
  },
  {
    id: 2,
    title: "randomized",
  },
];

interface DijkstraSidePanelType {
  onCreateGridGraph: (data: IGridGraphForm) => void;
  onCreateRandomizedGraph: (data: IRandomizedGraphForm) => void;
  onCreateMaze: NoneToVoidFunction;
  onToggleRuler: (data: boolean) => void;
  onToggleGrid: (data: boolean) => void;
  speed: number;
  setSpeed: (id: number) => void;
}

const DijkstraSidePanel: FC<DijkstraSidePanelType> = (props) => {
  const { onCreateGridGraph, onCreateMaze, onCreateRandomizedGraph, onToggleGrid, onToggleRuler, speed, setSpeed } =
    props;

  const [selectedTopologyId, setSelectedTopologyId] = useState(graphTypes[0].id);
  const [showRuler, setShowRuler] = useState(true);
  const [showGrid, setShowGrid] = useState(true);

  const selectedTopology = useMemo(() => graphTypes.find((i) => i.id === selectedTopologyId), [selectedTopologyId]);

  const handleToggleGrid = (state: boolean) => {
    onToggleGrid(state);
    setShowGrid(state);
  };

  const handleToggleRuler = (state: boolean) => {
    onToggleRuler(state);
    setShowRuler(state);
  };

  return (
    <Stack>
      <Box my={1}>
        <Divider>Options</Divider>
      </Box>
      <Stack my={1} justifyContent="space-around" direction="row">
        <Stack direction="row" alignItems="center">
          <Checkbox checked={showGrid} onChange={(e) => handleToggleGrid(e.target.checked)} />
          <Grid4x4Icon />
        </Stack>
        <Stack direction="row" alignItems="center">
          <Checkbox checked={showRuler} onChange={(e) => handleToggleRuler(e.target.checked)} />
          <StraightenIcon />
        </Stack>
      </Stack>
      <Stack my={2}>
        <InputLabel id="viz-speed-id">Visualization Speed</InputLabel>
        <Select
          value={speed}
          onChange={(e) => setSpeed(e.target.value as number)}
          size="small"
          label="Visualization Speed"
          labelId="viz-speed-id"
        >
          {VISUALIZATION_SPEED.map((s) => {
            return <MenuItem value={s.id}>{s.label}</MenuItem>;
          })}
        </Select>
      </Stack>
      <Box my={1}>
        <Divider>Create Maze</Divider>
        <Box my={1}>
          <Button fullWidth onClick={onCreateMaze} variant="outlined">
            Recursive Back tracking{" "}
          </Button>
        </Box>
      </Box>
      <Box my={1}>
        <Divider>Create Graph</Divider>
      </Box>
      <InputLabel id="topology-id">Graph Type</InputLabel>
      <Select
        labelId="topology-id"
        value={selectedTopologyId}
        onChange={(e) => setSelectedTopologyId(e.target.value as number)}
        size="small"
      >
        {graphTypes.map((graphTopology) => {
          return <MenuItem value={graphTopology.id}>{graphTopology.title}</MenuItem>;
        })}
      </Select>
      <Switch>
        <Case condition={selectedTopology?.title === "grid"}>
          <DijkstraSidePanelGridGraphForm onCreate={onCreateGridGraph} />
        </Case>
        <Case condition={selectedTopology?.title === "randomized"}>
          <DijkstraSidePanelRandomizedGraphForm onCreate={onCreateRandomizedGraph} />
        </Case>
      </Switch>
    </Stack>
  );
};

export default DijkstraSidePanel;
