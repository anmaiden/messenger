import React from "react";
import { cn } from "@bem-react/classname";
import { Typography } from "@material-ui/core";
import "./Message.css";

interface MessageProps {
  message: string;
  time: string;
}
//class for block
const Msg = cn("Message");

const Message = (props: MessageProps) => (
  <Typography className={Msg()} variant="body2">
    {props.message}
    <span className={Msg("Time")}>{props.time}</span>
  </Typography>
);

export default Message;
