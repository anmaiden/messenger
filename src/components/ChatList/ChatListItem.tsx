import React from "react";
import { Link } from "react-router-dom";
import TypingStatus from "../../components/Typing/TypingStatus";
import { User } from "../../data/users";
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
import { observer } from "mobx-react-lite";
import OnlineStatus from "../OnlineStatus/OnlineStatus";

const ChatListItem: React.FC<User> = observer(
  ({ id, name, isOnline, avatar, isTyping, text, UnreadMessages }) => {
    //class for block
    const ChatList = cn("ChatList");

    return (
      <Link to={`/chats/${id}`} state={{ id }} className={ChatList("Link")}>
        <ListItem key={id}>
          <ListItemAvatar>
            <Box className={ChatList("Avatar")}>
              <Avatar alt={name} src={avatar} />
              {isOnline && <OnlineStatus isOnline={isOnline} />}
            </Box>
          </ListItemAvatar>
          <Box className={ChatList("Text")}>
            <Box className={ChatList("Chat-Wrapper")}>
              <ListItemText className={ChatList("Chat-User")}>
                {name}
              </ListItemText>
              <ListItemText
                className={ChatList("Chat-Time")}
                secondary={"9:05"}
              />
            </Box>
            <Box className={ChatList("MsgsContainer")}>
              {isTyping ? (
                <TypingStatus />
              ) : (
                <ListItemText
                  secondary={text}
                  className={ChatList("Chat-Text")}
                />
              )}
            </Box>
            {UnreadMessages > 0 && (
              <Badge
                className={ChatList("MsgsBadge")}
                badgeContent={UnreadMessages}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                color="primary"
              />
            )}
          </Box>
        </ListItem>
      </Link>
    );
  }
);

export default ChatListItem;
