import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Stage, Visualization } from "graph-visualizer-core";
import DijkstraTopPanel from "./TopPanel";
import DijkstraSidePanel from "./SidePanel";
import { IGridGraphForm, IRandomizedGraphForm } from "src/types/grid";
import "graph-visualizer-core/dist/main.css";
import { VISUALIZATION_SPEED } from "src/constants/dijkstra";
import { VisualizationSpeed } from "graph-visualizer-core/dist/types/types/visualization";

const DijkstraPathFindingPage = () => {
  const visualizationDocumentReference = useRef(null);

  const stageRef = useRef<Nullable<Stage>>(null);
  const visualizationRef = useRef<Nullable<Visualization<"grid">>>(null);
  const [selectedSpeedId, setSelectedSpeedId] = useState<number>(VISUALIZATION_SPEED[0].id);

  const handleStart = () => {
    visualizationRef.current?.start();
  };

  const handlePause = () => {
    visualizationRef.current?.pause();
  };

  const handleStep = () => {
    visualizationRef.current?.step();
  };

  const handleUpdateShowRuler = (st: boolean) => {
    //@ts-ignore
    visualizationRef.current.mainView.showRuler = st;
  };

  const handleUpdateShowGrid = (st: boolean) => {
    //@ts-ignore
    visualizationRef.current.mainView.showGrid = st;
    console.log("grid");
  };

  const handleCreateMaze = () => {
    visualizationRef.current?.generateRecursiveBacktrackingMaze();
  };

  const createGridGraph = (data: IGridGraphForm) => {
    visualizationRef.current?.createGraph("grid", {
      width: data.width,
      height: data.height,
      entry: data.entryPoint,
      targets: data.targetList,
      gap: 60,
    });
  };

  const createRandomizedGraph = (data: IRandomizedGraphForm) => {
    //@ts-ignore
    visualizationRef.current?.createGraph("randomized", {size: data.size});
    //@ts-ignore
  };

  const handleUpdateSpeed= (id:number)=>{
    if(!visualizationRef.current) return
    setSelectedSpeedId(id);
    const speedTitle = VISUALIZATION_SPEED.find((i) => i.id === id)?.label as VisualizationSpeed;
    visualizationRef.current.speed = speedTitle;
  }

  useEffect(() => {
    if (visualizationDocumentReference && visualizationDocumentReference.current) {
      const stage = Stage.init(visualizationDocumentReference.current);
      const vis = new Visualization();
      stage.visualization = vis;
      stageRef.current = stage;
      visualizationRef.current = vis;
    }
  }, [visualizationDocumentReference , ]);

  return (
    <Stack direction="row-reverse" gap={3} height="100%">
      <Stack p={4} bgcolor="white" borderRadius={1} width="400px">
        <Typography variant="h5" mb={2}>
          Settings
        </Typography>
        <DijkstraSidePanel
          onToggleGrid={handleUpdateShowGrid}
          onToggleRuler={handleUpdateShowRuler}
          onCreateMaze={handleCreateMaze}
          onCreateGridGraph={createGridGraph}
          onCreateRandomizedGraph={createRandomizedGraph}
          speed={selectedSpeedId}
          setSpeed={handleUpdateSpeed}
        />
      </Stack>
      <Stack width="100%" height="84vh">
        <DijkstraTopPanel onClickPause={handlePause} onClickStart={handleStart} onClickStep={handleStep} />
        <Box
          ref={visualizationDocumentReference}
          bgcolor="white"
          height="100%"
          width="100%"
          mt={2}
          borderRadius={1}
          p={2}
        ></Box>
      </Stack>
    </Stack>
  );
};

export default DijkstraPathFindingPage;
