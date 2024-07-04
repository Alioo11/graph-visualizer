import { useLocation } from "react-router-dom";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import breadCrumbHelper from "src/helpers/breadcrumb";

const LayoutBreadcrumb = () => {
  const { pathname } = useLocation();

  const breadcrumbs = breadCrumbHelper.generateLinksFromRoute(pathname);

  return (
    <Box m={4} role="presentation">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb) => {
          return (
            <Link underline="hover" color="inherit" href={breadcrumb.route}>
              {breadcrumb.label}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default LayoutBreadcrumb;
