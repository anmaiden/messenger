import React from "react";
import "./App.css";
// theme
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
//components
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Sidebar />
      </div>
    </ThemeProvider>
  );
}

export default App;
