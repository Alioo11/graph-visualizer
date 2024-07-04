import { Box, CircularProgress } from "@mui/material";
import type { FC } from "react";
import type { LoaderProps } from "./props";

const Loader: FC<LoaderProps> = (props) => {
  const { width, height } = props;
  return (
    <Box
      width={width || "100%"}
      height={height || "100vh"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
