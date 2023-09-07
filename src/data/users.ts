import userAvatars from "./userAvatars";

export type User = {
  id: number;
  name: string;
  avatar: string;
  isOnline: boolean;
  isTyping: boolean;
  hasUnreadMessages: boolean;
};

export const users: User[] = [
  {
    id: 1,
    name: 'Дмитрий Анатольевич',
    avatar: userAvatars.chatUser1,
    isOnline: false,
    isTyping: false,
    hasUnreadMessages: true
  },
  {
    id: 2,
    name: 'Анастасия Александровна',
    avatar: userAvatars.chatUser2,
    isOnline: false,
    isTyping: false,
    hasUnreadMessages: true
  },
  {
    id: 3,
    name: 'Диалог М',
    avatar: userAvatars.chatUser3,
    isOnline: false,
    isTyping: false,
    hasUnreadMessages: true
  },
  {
    id: 4,
    name: 'Андрей В.',
    avatar: userAvatars.chatUser4,
    isOnline: false,
    isTyping: false,
    hasUnreadMessages: true
  },
  {
    id: 5,
    name: 'Андрей В.',
    avatar: userAvatars.chatUser4,
    isOnline: false,
    isTyping: false,
    hasUnreadMessages: true
  },
  {
    id: 6,
    name: 'Анна',
    avatar: userAvatars.chatUser5,
    isOnline: false,
    isTyping: false,
    hasUnreadMessages: true
  },
  {
    id: 7,
    name: 'Игорь Хоменко',
    avatar: userAvatars.chatUser6,
    isOnline: false,
    isTyping: false,
    hasUnreadMessages: true
  },
  {
    id: 8,
    name: 'Алина Викторовна',
    avatar: userAvatars.chatUser7,
    isOnline: false,
    isTyping: false,
    hasUnreadMessages: true
  },
  {
    id: 9,
    name: 'Алина Викторовна',
    avatar: userAvatars.chatUser7,
    isOnline: false,
    isTyping: false,
    hasUnreadMessages: true
  },
  {
    id: 10,
    name: 'Вова',
    avatar: userAvatars.chatUser8,
    isOnline: false,
    isTyping: false,
    hasUnreadMessages: true
  },
  {
    id: 11,
    name: 'Алексей курочкин',
    avatar: userAvatars.chatUser9,
    isOnline: false,
    isTyping: false,
    hasUnreadMessages: true
  },
];