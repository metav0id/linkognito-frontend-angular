export interface ChatMessage {
  receiver: number;
  sender: number;
  timeStamp: string;
  text: string;
  senderName?: string; //only for user-module use
}
