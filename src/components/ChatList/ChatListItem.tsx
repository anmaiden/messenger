import React from "react";
import { ChatMessage } from "../Chat/MessageList";
import { messages } from "../Chat/MessageList";
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

const ChatListItem: React.FC = () => {
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
      {users.map((user) => (
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
            <ListItemText
              className={ChatList("Chat-User")}
              primary={user.name}
              secondary={getLastMessage(user)?.time}
            />
            <ListItemText secondary={getLastMessage(user)?.text} />
          </Box>
        </ListItem>
      ))}
    </Box>
  );
};

export default ChatListItem;
