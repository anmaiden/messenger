import React from "react";
import UserName from "./UserName";
import "./ChatHeader.css";
import { users } from "../../../data/users";
import { Box } from "@material-ui/core";
import { cn } from "@bem-react/classname";
import UserStatus from "./UserStatus";

const ChatHeader = () => {
  //class for block
  const ChatHeader = cn("ChatHeader");

  const user = users[0]; //fix that
  return (
    <Box className={ChatHeader()}>
      <UserName user={user} />
      <UserStatus />
    </Box>
  );
};

export default ChatHeader;
