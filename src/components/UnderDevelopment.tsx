import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SettingsIcon from "@mui/icons-material/Settings";

const UnderDevelopmentPage = () => {
  return (
    <Stack width="100%" justifyContent="center" height="80vh" alignItems="center" color="grey">
      <SettingsIcon fontSize="large" />
      <Typography mt={3}>Under Development</Typography>
    </Stack>
  );
};

export default UnderDevelopmentPage;
