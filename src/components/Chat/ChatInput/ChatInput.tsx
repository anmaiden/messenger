import { cn } from "@bem-react/classname";
import React from "react";
import "./ChatInput.css";

const ChatInput = () => {
  const ChatInput = cn("ChatInput");
  return (
    <div className={ChatInput()}>
      <input
        className={ChatInput("MsgInput")}
        type="text"
        placeholder="Написать сообщение..."
      />
    </div>
  );
};
export default ChatInput;
