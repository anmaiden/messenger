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

const cnChat = cn("Chat");

const Chat: React.FC = observer(() => {
  const { id } = useLocation().state;


  const { name, isTyping } = UserStore.userData[id];

  useEffect(() => {
    UserStore.clearMessages(id);
  }, [id]);

  return (
    <Box className={cnChat()}>
      <Box className={cnChat("ChatHeader")}>
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
