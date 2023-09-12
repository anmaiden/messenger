import { ListItemText } from "@material-ui/core";
import React from "react";
import { User } from "../../../data/users";

type UserNameProps = {
  user: User;
};

const UserName: React.FC<UserNameProps> = ({ user }) => {
  return <ListItemText primary={user.name} />;
};

export default UserName;
