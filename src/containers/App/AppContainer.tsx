import React from "react";
import "./AppContainer.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import ChatList from "../../components/ChatList/ChatList";
import { Box } from "@material-ui/core";
// функция для классов
import { cn } from "@bem-react/classname";
import Chat from "../../components/Chat/ChatBody/Chat";

const AppContainer: React.FC = () => {
  //class for block
  const AppContainer = cn("AppContainer");

  return (
    <Box className={AppContainer()}>
      <Box className={AppContainer("Sidebar")}>
        <Sidebar />
      </Box>
      <Box className={AppContainer("ChatList")}>
        <ChatList />
      </Box>
      <Box className={AppContainer("Chat")}>
        <Chat />
      </Box>
    </Box>
  );
};

export default AppContainer;
