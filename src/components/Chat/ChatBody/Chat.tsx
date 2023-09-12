import React from "react";
import { Box } from "@material-ui/core";
import ChatHeader from "../ChatHeader/ChatHeader";
import { cn } from "@bem-react/classname";
import "./Chat.css";
import MessageList from "./Messages/MessageList";
import ChatInput from "../ChatInput/ChatInput";

const Chat: React.FC = () => {
  //class for block
  const Chat = cn("Chat");
  return (
    <Box className={Chat()}>
      <ChatHeader />
      <Box>
        <MessageList />
      </Box>
      <ChatInput />
    </Box>
  );
};

export default Chat;
