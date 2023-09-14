import userAvatars from "./userAvatars";

export type User = {
  id: number;
  name: string;
  avatar: string;
  isOnline: boolean;
  isTyping: boolean;
  UnreadMessages: number;
  text: string;
};

export const users: User[] = [
  {
    id: 0,
    name: 'Дмитрий Анатольевич',
    avatar: userAvatars.chatUser1,
    isOnline: false,
    isTyping: false,
    UnreadMessages: 0,
    text: "Документы будут готовы к вечеру",
  },
  {
    id: 1,
    name: 'Анастасия Александровна',
    avatar: userAvatars.chatUser2,
    isOnline: false,
    isTyping: false,
    UnreadMessages: 0,
    text: "Спасибо, получила",
  },
  {
    id: 2,
    name: 'Диалог М',
    avatar: userAvatars.chatUser3,
    isOnline: false,
    isTyping: false,
    UnreadMessages: 0,
    text: "Доступна новая веб-версия...",
  },
  {
    id: 3,
    name: 'Андрей В.',
    avatar: userAvatars.chatUser4,
    isOnline: false,
    isTyping: false,
    UnreadMessages: 0,
    text: "Добрый день!",
  },
  {
    id: 4,
    name: 'Андрей В.',
    avatar: userAvatars.chatUser4,
    isOnline: false,
    isTyping: false,
    UnreadMessages: 0,
    text: "Доброе утро!",
  },
  {
    id: 5,
    name: 'Анна',
    avatar: userAvatars.chatUser5,
    isOnline: false,
    isTyping: false,
    UnreadMessages: 0,
    text: "Документы будут готовы к..",
  },
  {
    id: 6,
    name: 'Игорь Хоменко',
    avatar: userAvatars.chatUser6,
    isOnline: false,
    isTyping: false,
    UnreadMessages: 0,
    text: "Меня нет на работе. больнич...",
  },
  {
    id: 7,
    name: 'Алина Викторовна',
    avatar: userAvatars.chatUser7,
    isOnline: false,
    isTyping: false,
    UnreadMessages: 0,
    text: "И слова, получив текст широко...",
  },
  {
    id: 8,
    name: 'Алина Викторовна',
    avatar: userAvatars.chatUser7,
    isOnline: false,
    isTyping: false,
    UnreadMessages: 0,
    text: "Привет",
  },
  {
    id: 9,
    name: 'Вова',
    avatar: userAvatars.chatUser8,
    isOnline: false,
    isTyping: false,
    UnreadMessages: 0,
    text: "Создающие собственные...",
  },
  {
    id: 10,
    name: 'Алексей курочкин',
    avatar: userAvatars.chatUser9,
    isOnline: false,
    isTyping: false,
    UnreadMessages: 0,
    text: "Отправь пожалуйста документ",
  },
];