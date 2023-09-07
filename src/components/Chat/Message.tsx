import React from "react";
import { User } from "../../data/users";

interface MessageProps {
  message: string;
  sender: User;
  time: string;
}

const Message = ({ message }: MessageProps) => (
  <div className="message">{message}</div>
);

export default Message;
