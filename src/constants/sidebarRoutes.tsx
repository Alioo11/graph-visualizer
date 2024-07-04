import TimelineIcon from "@mui/icons-material/Timeline";
import PatternIcon from "@mui/icons-material/Pattern";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { sidebarItem } from "src/types/sidebar";
import { ROUTES } from "./routes";

export const sidebarRoutes: Array<sidebarItem> = [
  {
    route: "/",
    label: "Dashboard",
    icon: <DashboardIcon />,
    children: [],
  },
  {
    route: "path-finding",
    label: "Path Finding",
    icon: <PatternIcon />,
    children: [
      { label: "Dijkstra", route: ROUTES.DIJKSTRA },
      { label: "A Star", route: ROUTES.A_STAR },
    ],
  },
  {
    route: "/graph-connectivity",
    label: "Graph Connectivity",
    icon: <TimelineIcon />,
    children: [{ label: "Kruskal", route: ROUTES.KRUSKAL }],
  },
];
