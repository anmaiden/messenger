import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// theme
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
//components
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/ChatBody/Chat";
import ChatList from "./components/ChatList/ChatList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Sidebar />
          <ChatList />
          <Routes>
            <Route path="/chats/:id" element={<Chat />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
