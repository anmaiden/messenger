import { makeAutoObservable } from "mobx";
import { User, users } from "../data/users";

export class UserStore {
  userData: User[] = users;

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  get totalMessages() {
    let total = 0;
    for (let user of this.userData) {
      total += user.UnreadMessages;
    }
    return total;
  }

  UserOnline = (id: number, isOnline: boolean) => {
    this.userData[id].isOnline = isOnline;
  };

  UserTyping = (id: number, isTyping: boolean) => {
    this.userData[id].isTyping = isTyping;
  };

  AddMessageCount = (id: number, UnreadMessages: number ) => {
    this.userData[id].UnreadMessages += 1;
  };

   clearMessages = (id: number) => {
    this.userData[id].UnreadMessages = 0;
  };
}

export default new UserStore();