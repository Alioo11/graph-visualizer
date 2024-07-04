import MuiListItemText from "@mui/material/ListItemText";
import type { FC } from "react";
import type { ListItemTextProps } from "./props";

const ListItemText: FC<ListItemTextProps> = ({ active = false, ...props }) => {
  return (
    <MuiListItemText
      {...props}
      primaryTypographyProps={{
        ...props.primaryTypographyProps,
        color: active ? "primary" : undefined,
      }}
    />
  );
};
export default ListItemText;
