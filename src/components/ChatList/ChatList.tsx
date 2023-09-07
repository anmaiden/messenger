import React, { useEffect } from "react";
import "./ChatList.css";
// функция для классов
import { cn } from "@bem-react/classname";
// components
import ChatListItem from "./ChatListItem";
import SearchBar from "../Search/SearchBar";

import { Box, List } from "@material-ui/core";

const ChatList: React.FC = () => {
  //class for block
  const ChatList = cn("ChatList");

  return (
    <Box className={ChatList()}>
      <SearchBar />
      <Box>
        <List className={ChatList("List")}>
          <ChatListItem />
        </List>
      </Box>
    </Box>
  );
};

export default ChatList;
