import { Box, Button, Stack, TextField } from "@mui/material";
import { FC, useState } from "react";
import { IRandomizedGraphForm } from "src/types/grid";

interface DijkstraSidePanelGridGraphFormType {
  onCreate: (data: IRandomizedGraphForm) => void;
}

const DEFAULT_RANDOMIZED_GRAPH_SIZE = 30;

const DijkstraSidePanelRandomizedGraphForm: FC<DijkstraSidePanelGridGraphFormType> = (props) => {
  const { onCreate } = props;

  const [size, setSize] = useState<IRandomizedGraphForm["size"]>(DEFAULT_RANDOMIZED_GRAPH_SIZE);

  return (
    <Stack my={2}>
      <Stack my={2}>
        <TextField size="small" type="number" value={size} onChange={(e) => setSize(parseInt(e.target.value))} />
      </Stack>
      <Button onClick={() => onCreate({ size: size })} variant="contained">
        Create
      </Button>
    </Stack>
  );
};

export default DijkstraSidePanelRandomizedGraphForm;
