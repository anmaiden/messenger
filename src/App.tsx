import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// theme
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
//components
import Sidebar from "./components/Sidebar/Sidebar";
import ChatListContainer from "./containers/ChatList/ChatListContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<ChatListContainer />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
