import AppThemeProvider from "./contexts/ThemeProvider";
import Router from "./routes";

function App() {
  return (
    <AppThemeProvider>
      <Router />
    </AppThemeProvider>
  );
}

export default App;
