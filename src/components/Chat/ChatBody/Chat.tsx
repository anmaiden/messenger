import React, { useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { cn } from "@bem-react/classname";
import "./Chat.css";
import MessageList from "./Messages/MessageList";
import ChatInput from "../ChatInput/ChatInput";
import { useLocation } from "react-router-dom";
import TypingStatus from "../../Typing/TypingStatus";
import { observer } from "mobx-react-lite";
import UserStore from "../../../stores/UserStore";

const Chat: React.FC = observer(() => {
  const { id } = useLocation().state;

  //class for block
  const Chat = cn("Chat");
  const { name, isTyping } = UserStore.userData[id];

  useEffect(() => {
    UserStore.clearMessages(id);
  }, [id]);

  return (
    <Box className={Chat()}>
      <Box className={Chat("ChatHeader")}>
        <Typography>{name}</Typography>
        {isTyping && <TypingStatus />}
      </Box>
      <Box>
        <MessageList />
      </Box>
      <ChatInput />
    </Box>
  );
});

export default Chat;
