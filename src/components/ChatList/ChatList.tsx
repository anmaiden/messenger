import React, { useEffect, useState } from "react";
import "./ChatList.css";
// функция для классов
import { cn } from "@bem-react/classname";
// components
import ChatListItem from "./ChatListItem";
import SearchBar from "../Search/SearchBar";
import { Box, List } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import UserStore from "../../stores/UserStore";
import { actionDelay, randomNumbers } from "../../fuctions/randomNumbers";

export const ChatList: React.FC = observer(() => {
  const classes = cn("ChatList");
  const [searchQuery, setSearchQuery] = useState("");
  const filteredUsers = UserStore.userData.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const userRandomId = randomNumbers(0, 10);
      const delayOnline = randomNumbers(1000, 3000);
      const delayPrint = randomNumbers(1000, 8000);
      const sendNewMsg = Boolean(randomNumbers(1, 10));

      const OnlineDelay = async () => {
        await actionDelay(delayOnline);
        UserStore.UserOnline(userRandomId, true);
        if (sendNewMsg) {
          UserStore.UserTyping(userRandomId, true);
        }
      };
      const PrintDelay = async () => {
        await actionDelay(delayPrint);
        UserStore.UserTyping(userRandomId, false);
        if (sendNewMsg) {
          UserStore.AddMessageCount(userRandomId, 0);
          UserStore.UserOnline(userRandomId, false);
        } else {
          UserStore.UserTyping(userRandomId, true);
        }
      };
      OnlineDelay();
      PrintDelay();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={classes()}>
      <SearchBar setSearchQuery={setSearchQuery} />
      <Box>
        <List className={classes("List")}>
          {filteredUsers.map(
            ({
              id,
              name,
              isOnline,
              avatar,
              isTyping,
              UnreadMessages,
              text,
            }) => (
              <ChatListItem
                key={id}
                id={id}
                name={name}
                avatar={avatar}
                isOnline={isOnline}
                isTyping={isTyping}
                UnreadMessages={UnreadMessages}
                text={text}
              />
            )
          )}
        </List>
      </Box>
    </Box>
  );
});

export default ChatList;
