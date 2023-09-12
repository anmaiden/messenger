import React from "react";
import Message from "./Message";
import { User, users } from "../../../../data/users";
import { Box, Fab, Typography } from "@material-ui/core";
import { cn } from "@bem-react/classname";
import "./Message.css";

export interface ChatMessage {
  sender: User;
  text: string;
  time: string;
}

export const getRandomTime = (): string => {
  const hours = Math.floor(Math.random() * 12) + 1;
  const minutes = Math.floor(Math.random() * 60);
  const time = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  return time;
};

interface MessageListProps {
  message: ChatMessage;
}

export const messages: ChatMessage[] = [
  {
    sender: users[0],
    text: "Документы будут готовы к вечеру",
    time: getRandomTime(),
  },
  {
    sender: users[1],
    text: "Отправил",
    time: getRandomTime(),
  },
  {
    sender: users[2],
    text: "Отправь пожалуйста документ с резолюцией",
    time: getRandomTime(),
  },
  {
    sender: users[3],
    text: "Доброе утро!",
    time: getRandomTime(),
  },
  {
    sender: users[4],
    text: "Отправил",
    time: getRandomTime(),
  },
  {
    sender: users[5],
    text: "И слова, получив текст широко известно",
    time: getRandomTime(),
  },
  {
    sender: users[6],
    text: "Создающие собственные варианты",
    time: getRandomTime(),
  },
  {
    sender: users[7],
    text: "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы",
    time: getRandomTime(),
  },
  {
    sender: users[8],
    text: "Привет",
    time: getRandomTime(),
  },
  {
    sender: users[9],
    text: "Привет, как дела?",
    time: getRandomTime(),
  },
  {
    sender: users[10],
    text: "Привет, как дела?",
    time: getRandomTime(),
  },
];

//class for block
const MsgList = cn("MessageList");

const MessageList = () => {
  return (
    <Box className={MsgList()}>
      <Box className={MsgList("InboxMsg")}>
        <Message message={"Хорошо Отрпавил"} time={getRandomTime()} />
      </Box>
      <Box className={MsgList("OutgoingMsg")}>
        <Message message={"Благодарю"} time={getRandomTime()} />
      </Box>
      <Box className={MsgList("InboxMsg")}>
        <Message message={"Привет, как дела?"} time={getRandomTime()} />
        <Message
          message={"Отправь пожалуйста документ с резолюцией"}
          time={getRandomTime()}
        />
      </Box>
      <Box className={MsgList("OutgoingMsg")}>
        <Message message={"Привет"} time={getRandomTime()} />
      </Box>
      <Box className={MsgList("InboxMsg")}>
        <Message message={"Спасибо, получила"} time={getRandomTime()} />
      </Box>
      <Box className={MsgList("DateMsg")}>
        <Typography
          className={MsgList("DateChatItem")}
          variant="body2"
          align="center"
        >
          18 ноября
        </Typography>
      </Box>
      <Box className={MsgList("InboxMsg")}>
        <Message message={"Доброе утро!"} time={getRandomTime()} />
      </Box>
      <Box className={MsgList("OutgoingMsg")}>
        <Message message={"Доброе утро!"} time={getRandomTime()} />
      </Box>
      <Box className={MsgList("InboxMsg")}>
        <Message
          message={
            "Каждый веб-разработчик знает, что такое текст-«рыба».Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы"
          }
          time={getRandomTime()}
        />
      </Box>
    </Box>
  );
};

export default MessageList;
