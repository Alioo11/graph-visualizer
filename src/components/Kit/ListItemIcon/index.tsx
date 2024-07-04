import MUIListItemIcon from "@mui/material/ListItemIcon";
import useTheme from "@mui/material/styles/useTheme";
import type { FC } from "react";
import type { ListItemIconProps } from "./props";

const ListItemIcon: FC<ListItemIconProps> = ({
  active = false,
  ...props
}: ListItemIconProps) => {
  const theme = useTheme();
  return (
    <MUIListItemIcon
      {...props}
      sx={{
        ...props.sx,
        ...(active
          ? { "& .MuiSvgIcon-root": { color: theme.palette.primary.main } }
          : {}),
      }}
    />
  );
};
export default ListItemIcon;
