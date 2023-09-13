import React from "react";
import { Link } from "react-router-dom";
import { ChatMessage } from "../Chat/ChatBody/Messages/MessageList";
import { messages } from "../Chat/ChatBody/Messages/MessageList";
import { users, User } from "../../data/users";
import "./ChatList.css";
import { cn } from "@bem-react/classname";
import {
  Avatar,
  Badge,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import UserName from "../Chat/ChatHeader/UserName";

interface ChatListItemProps {
  user: User;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ user }) => {
  
  
  // функция вывода последнего сообщения пользователя
  const getLastMessage = (user: User): ChatMessage => {
    // фильтруем сообщения только этого пользователя
    const userMessages = messages.filter((msg) => msg.sender.id === user.id);

    // возвращаем последнее сообщение
    const latestMessage = userMessages[userMessages.length - 1];
    if (latestMessage) {
      if (latestMessage.text.length > 25) {
        const shortenedText = latestMessage.text.substring(0, 25) + "...";
        return { ...latestMessage, text: shortenedText };
      } else {
        return latestMessage;
      }
    } else {
      return { sender: user, text: "Нет сообщений", time: "" };
    }
  };

  //class for block
  const ChatList = cn("ChatList");

  return (
    <Box>
      <ListItem key={user.id} className={ChatList("Item")}>
        <ListItemAvatar>
          <Box>
            {user.isOnline ? (
              <Badge
                overlap="circular"
                badgeContent={<div className={ChatList("Badge")}></div>}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Avatar alt={user.name} src={user.avatar} />
              </Badge>
            ) : (
              <Avatar alt={user.name} src={user.avatar} />
            )}
            {user.isOnline && <div className="online-dot" />}
          </Box>
        </ListItemAvatar>
        <Box className={ChatList("Text")}>
          <Box className={ChatList("Chat-Wrapper")}>
            <ListItemText className={ChatList("Chat-User")}>
              <UserName user={user} />
            </ListItemText>
            <ListItemText
              className={ChatList("Chat-Time")}
              secondary={getLastMessage(user)?.time}
            />
          </Box>
          <ListItemText secondary={getLastMessage(user)?.text} />
        </Box>
      </ListItem>
    </Box>
  );
};

export default ChatListItem;
