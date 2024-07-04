import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getCSSVariable } from "src/utils/CSSVariables";

type Props = {
  children: React.ReactNode;
};

export default function AppThemeProvider({ children }: Props) {
  const theme = createTheme({
    spacing: 4,
    shape: { borderRadius: 8 },
    typography: {
      fontFamily: ["Dana", "Arial", "sans-serif"].join(","),
    },
    palette: {
      primary: {
        main: getCSSVariable("--color-primary-main"),
        light: getCSSVariable("--color-primary-lighter"),
      },
      secondary: {
        main: getCSSVariable("--color-secondary-main"),
      },
      success: {
        main: getCSSVariable("--color-assistive-success"),
        light: getCSSVariable("--color-assistive-success-light"),
        dark: getCSSVariable("--color-assistive-success-dark"),
      },
      error: {
        main: getCSSVariable("--color-assistive-error"),
        dark: getCSSVariable("--color-assistive-error-dark"),
      },
      text: {
        primary: getCSSVariable("--color-text-primary"),
        secondary: getCSSVariable("--color-text-secondary"),
        disabled: getCSSVariable("--color-text-disabled"),
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 769,
        md: 1024,
        lg: 1440,
        xl: 1920,
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
