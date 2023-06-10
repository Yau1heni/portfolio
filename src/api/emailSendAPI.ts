import { instance } from "api/congig";

export const emailSendAPI = {
  send(payload: FormsType) {
    return instance.post<any>("sendMessage", payload);
  },
};

export type FormsType = {
  name: string;
  email: string;
  message: string;
};
