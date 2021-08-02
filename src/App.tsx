import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { DataRepoImpl } from "./data/DataRepoImpl";
import { DataRepo } from "./data/DataRepo";
import { Sections } from "./components/Sections";
import { ProfileCard } from "./components/Profile";
import { createTheme, ThemeProvider, useMediaQuery } from "@material-ui/core";

const App = () => {
  const dataRepo: DataRepo = new DataRepoImpl();

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <div
        className="col"
        style={{
          alignItems: "center",
          minWidth: "100vw",
          maxWidth: "100vw",
          minHeight: "100vh",
          background: theme.palette.background.default,
        }}
      >
        <Header dataRepo={dataRepo} />
        <Sections dataRepo={dataRepo} />
        <ProfileCard dataRepo={dataRepo} />
      </div>
    </ThemeProvider>
  );
}

export default App;
