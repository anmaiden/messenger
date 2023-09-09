import { ListItemText } from "@material-ui/core";
import React from "react";

const UserChat: React.FC<{ name: string }> = ({ name }) => {
  return <ListItemText primary={name} />;
};

export default UserChat;
