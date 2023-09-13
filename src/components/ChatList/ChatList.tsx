import React, { useState } from "react";
import "./ChatList.css";
// функция для классов
import { cn } from "@bem-react/classname";
// components
import ChatListItem from "./ChatListItem";
import SearchBar from "../Search/SearchBar";

import { Box, List } from "@material-ui/core";
import { users } from "../../data/users";

const ChatList: React.FC = () => {
  //class for block
  const ChatList = cn("ChatList");
  // filter users
  const [searchQuery, setSearchQuery] = useState("");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box className={ChatList()}>
      <SearchBar setSearchQuery={setSearchQuery} />
      <Box>
        <List className={ChatList("List")}>
          {filteredUsers.map((user) => (
            <ChatListItem key={user.id} user={user} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ChatList;
