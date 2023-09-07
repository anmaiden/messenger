import React from "react";
import "./ChatListContainer.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import ChatList from "../../components/ChatList/ChatList";
import { Box } from "@material-ui/core";
// функция для классов
import { cn } from "@bem-react/classname";

const ChatListContainer: React.FC = () => {
  //class for block
  const ChatContainer = cn("ChatListContainer");

  return (
    <Box className={ChatContainer()}>
      <Box className={ChatContainer("Sidebar")}>
        <Sidebar />
      </Box>
      <Box className={ChatContainer("ChatList")}>
        <ChatList />
      </Box>
    </Box>
  );
};

export default ChatListContainer;
